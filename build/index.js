"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var morgan_1 = require("morgan");
var rqm_1 = require("./routes/rqm");
var app = express();
var port = 8080;
app.use(morgan_1.default("combined"));
app.use("/rqm", rqm_1.router);
app.use(function (req, res) { return res.status(404).end(); });
app.listen(port, function () {
    return console.log("server is started and listening on port " + port + " !");
});
//# sourceMappingURL=index.js.map