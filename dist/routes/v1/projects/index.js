"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const projects = express_1.default.Router();
projects.get("/", controllers_1.listProjects);
projects.get("/:id", controllers_1.getProject);
projects.get("/:id/tasks", controllers_1.listProjectTask);
exports.default = projects;
