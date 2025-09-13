import express, { Router } from "express";
import { getProject, listProjects, listProjectTask } from "./controllers";

const projects: Router = express.Router();

projects.get("/", listProjects);
projects.get("/:id", getProject);
projects.get("/:id/tasks", listProjectTask);

export default projects;
