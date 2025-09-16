"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorHandler;
const config_1 = __importDefault(require("../config"));
const utils_1 = require("../utils");
function errorHandler(error, req, res, next) {
    if (res.headersSent || config_1.default.debug) {
        next(error);
        return;
    }
    res.status(500).json({
        error: {
            message: (0, utils_1.getErrorMessage)(error) || "Error: View logs for more details",
        },
    });
}
