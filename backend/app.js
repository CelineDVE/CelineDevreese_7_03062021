
require("dotenv").config({ path: "./config/.env" });
const express           = require("express");
const bodyParser        = require("body-parser");
const helmet            = require("helmet");
const xss               = require("xss-clean");
const app               = express();

app.use(helmet()); //Sécuriser les headers

app.use(xss());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;
