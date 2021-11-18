import "reflect-metadata";
import express, { Application } from "express";
import logRoutes from "./src/app";
import mongoose from "mongoose";

const app: Application = express();


app.use(express.json());
app.use(logRoutes.path, logRoutes.router);


app.listen(3000, () => {
    mongoose.connect("mongodb://localhost:27017/logs", () => console.log("db connected"));
    console.log("App started")
})