const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();

app.use(morgan("dev"));
app.use(helmet());

app.get("/status", (req, res) => {
    res.send({
        status: "Online",
        version: process.env.npm_package_version,
    });
});

module.exports = app;
