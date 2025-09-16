import express, { Router } from "express";
import { getProject, listProjects, listProjectTask } from "./controllers";
import authenticateUser from "../../../middleware/authenticate-user";

const projects: Router = express.Router();

projects.use(authenticateUser);
projects.get("/", listProjects);
projects.get("/:id", getProject);
projects.get("/:id/tasks", listProjectTask);

export default projects;
