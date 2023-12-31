"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var api_route_1 = __importDefault(require("./src/routes/api.route"));
var app = (0, express_1.default)();
app.use('/api', api_route_1.default);
app.listen(parseInt((_a = process.env.PORT) !== null && _a !== void 0 ? _a : '3000', 10));
