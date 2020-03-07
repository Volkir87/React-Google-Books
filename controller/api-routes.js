const express = require("express");
const mongoose = require("mongoose");
const Book = require("../database/bookModel");

const apiRoutes = express.Router();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });



module.exports = apiRoutes;