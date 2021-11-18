import express, { Request, Response, NextFunction } from "express";
import { container, locators } from "../diConfig";
import { ILog } from "./LogModel";
import { ILogService } from "./logService/IlogService";


const router = express.Router();
const logService: ILogService = container.get<ILogService>(locators.LogService)

const checkRequestId = (req: Request, res: Response, next: NextFunction) => {
    req.body.requestId = req.body.requestId || req.headers["x-request-id"] || "";
    next();
}

router.post("/", checkRequestId, (req: Request, res: Response) => {
    const body = req.body as ILog;
    logService.log(body);
    return res.sendStatus(201);
});


export default {
    router,
    path: "/log"
}