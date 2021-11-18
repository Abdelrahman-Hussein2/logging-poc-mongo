import { ILog } from "../LogModel";

export interface ILogService {
    log(log: ILog): void;
}