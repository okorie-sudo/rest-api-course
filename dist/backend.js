"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBackend = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const v1_1 = __importDefault(require("./routes/v1"));
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
const createBackend = () => {
    const app = (0, express_1.default)();
    app
        .disable("x-powered-by")
        .use((0, morgan_1.default)("dev"))
        .use(express_1.default.urlencoded({ extended: true }))
        .use(express_1.default.json())
        .use((0, cors_1.default)());
    app.get("/health", (req, res) => {
        res.json({ ok: true, environment: config_1.default.env, port: config_1.default.port });
    });
    app.use("/v1", v1_1.default);
    app.use(error_handler_1.default);
    return app;
};
exports.createBackend = createBackend;
