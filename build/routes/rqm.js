"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
exports.router = express.Router();
exports.router.get("/", function (req, res) {
    res.send({ author: "#some_author", text: "#some_text" });
});
//# sourceMappingURL=rqm.js.map