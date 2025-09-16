"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProjectTask = exports.getProject = exports.listProjects = void 0;
const prisma_client_1 = __importDefault(require("../../../prisma-client"));
const listProjects = (req, res) => {
    res.status(200).json([
        { id: 1, name: "project1" },
        { id: 1, name: "project1" },
        { id: 1, name: "project1" },
    ]);
};
exports.listProjects = listProjects;
const getProject = (req, res) => {
    res.status(200).json({ id: 1, name: "project1" });
};
exports.getProject = getProject;
const listProjectTask = async (req, res) => {
    const tasks = await prisma_client_1.default.task.findMany({
        where: {
            project_id: req.params.id,
        },
    });
    res.status(200).json({ tasks });
};
exports.listProjectTask = listProjectTask;
