const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  _id: { type: String },
  title: { type: String },
  subtitle: { type: String },
  authors: { type: Array },
  rating: { type: String },
  image: { type: String },
  link: { type: String },
  description: { type: String },
  saved: { type: Boolean, default: false },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
