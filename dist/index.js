"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const backend_1 = require("./backend");
const config_1 = __importDefault(require("./config"));
const backend = (0, backend_1.createBackend)();
backend.listen(config_1.default.port, () => {
    console.log(`Backend running smoothly on port ${config_1.default.port}`);
});
