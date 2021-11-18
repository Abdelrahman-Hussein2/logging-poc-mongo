import { Container } from "inversify"
import { ILogService } from "./src/logService/IlogService";
import { LogService } from "./src/logService/LogService";

export const locators = {
    LogService: Symbol.for("LogService"),
}

export const container = new Container();
container.bind<ILogService>(locators.LogService).to(LogService).inSingletonScope();
