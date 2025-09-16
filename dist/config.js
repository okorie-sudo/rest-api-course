"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    env: process.env.NODE_ENV || "development",
    port: parseInt(process.env.PORT || "5000"),
    debug: process.env.APP_DEBUG === "true",
};
exports.default = config;
