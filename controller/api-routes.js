const express = require("express");
const mongoose = require("mongoose");
const Book = require("../database/bookModel");

const apiRoutes = express.Router();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

apiRoutes.get('/api/books', async function(req, res) {
    let allBooks = await Book.find();
    //console.log(allBooks);
    res.json(allBooks);
});

apiRoutes.post('/api/books', function(req, res) {
    let book = new Book(req.body);
    Book.create(book)
        .then(dbBook => res.status(200).send(dbBook)
    )
        .catch(err => {res.json(err);});
});

module.exports = apiRoutes;