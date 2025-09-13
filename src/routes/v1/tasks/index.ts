import express, { Router } from "express";
import { listTasks, getTasks } from "./controllers";

const tasks: Router = express.Router();

tasks.get("/", listTasks);
tasks.get("/:id", getTasks);

export default tasks;
