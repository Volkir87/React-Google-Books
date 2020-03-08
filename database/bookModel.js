const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: 'Book title is required'
    },
    author: {
        type: Array,
        required: 'Book author is required'
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;