"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTask = exports.listTasks = void 0;
const prisma_client_1 = __importDefault(require("../../../prisma-client"));
const _1 = __importDefault(require("."));
const EntityNotFoundError_1 = __importDefault(require("../../../errors/EntityNotFoundError"));
const listTasks = async (req, res, next) => {
    const tasts = await prisma_client_1.default.task.findMany();
    res.status(200).json({ tasks: _1.default });
};
exports.listTasks = listTasks;
const getTask = async (req, res) => {
    const task = await prisma_client_1.default.task.findUnique({
        where: {
            id: req.params.id,
        },
    });
    if (!task) {
        throw new EntityNotFoundError_1.default({
            message: "task does not exist",
            statusCode: 404,
            code: "ERR_NF",
        });
    }
    res.status(200).json({ task });
};
exports.getTask = getTask;
