import { injectable } from "inversify";
import { ILog, LogModel } from "../LogModel";
import { ILogService } from "./IlogService";
import { EventEmitter } from 'events';


@injectable()
export class LogService implements ILogService {
    private logEvent: EventEmitter
    constructor() {
        this.logEvent = new EventEmitter();
        this.logEvent.on("log", this.insertLog);
    }
    log(log: ILog): void {
        this.logEvent.emit("log",log)
    }
    private insertLog(log: ILog): void {
        const newLog = new LogModel(log);
        newLog.save();
    }

}