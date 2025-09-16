"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasks_1 = __importDefault(require("./tasks"));
const projects_1 = __importDefault(require("./projects"));
const v1 = express_1.default.Router();
v1.use("/tasks", tasks_1.default);
v1.use("/projects", projects_1.default);
exports.default = v1;
