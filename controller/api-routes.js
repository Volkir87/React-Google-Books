const express = require("express");
const mongoose = require("mongoose");
const Book = require("../database/bookModel");
const axios = require("axios");
const fs = require("fs");

const apiRoutes = express.Router();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

function getKey(){
    let key =  fs.readFileSync("C:/Users/Kirill/projects/utils/GoogleAPI/APIKey.txt","utf8");
    return key;
}

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

apiRoutes.delete('/api/books/:id', function(req, res) {
    let bookId = req.params.id;
    Book.deleteOne({_id:bookId})
        .then(dbBook => res.status(200).send('Deleted successfully')
    )
        .catch(err => {res.json(err);});
});

apiRoutes.get('/api/books/search/:term', async function(req, res) {
    let term = req.params.term;
    let key;
    if (process.env.GOOG_API) {
        key = process.env.GOOG_API;
    } else {
        key = getKey();
    }
    let apiStr = `https://www.googleapis.com/books/v1/volumes?q=${term}&key=${key}`;
    let data = await axios.get(apiStr);
    //console.log('data: ', data);
    let books = data.data.items;
    res.send(books);
});

module.exports = apiRoutes;