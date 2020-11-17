"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var router_1 = __importDefault(require("./router"));
var app = new koa_1.default();
app.use(router_1.default.routes());
app.use(router_1.default.allowedMethods());
app.listen(4000);
//# sourceMappingURL=main.js.map