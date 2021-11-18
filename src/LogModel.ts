import { model, Schema, Model } from 'mongoose';

export interface ILog {
    userId?: string;
    requestId?: string;
    event: string;
    message?: string;
    metadata?: Record<string, any>,
    createdAt?: Date
}

const LogSchema: Schema = new Schema({
    userId: {
        type: String
    },
    requestId: {
        type: String
    },
    event: {
        type: String
    },
    message: {
        type: String
    },
    metadata: {
        type: Object
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: {
            expires: "10s"
        }
    }
});

export const LogModel: Model<ILog> = model("Log", LogSchema);
