"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const express = require("express");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.post("/", (req, res) => {
    console.log(req.body);
    //   res.send("Got data");
    res.json({
        message: "Successfully Received Data",
    });
});
exports.default = app;
