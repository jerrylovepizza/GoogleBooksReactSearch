require("dotenv").config();
const axios = require("axios");
const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  searchBooks: function (req, res) {
    // let bookTitle = req.params.bookTitle.replace(/\s/g, "+");
    let bookTitle = req.params.bookTitle.trim().split(" ").join("+");
    // console.log("server side:", bookTitle);
    axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=40&key=${process.env.GOOGLE_API_KEY}`
      // "https://www.googleapis.com/books/v1/volumes?key=&q=" + bookTitle
    ).then(response => {
      res.json(response.data)
    }).catch(err => {
      res.json({ error: error })
    });
  },

  saveBooks: function (req, res) {
    db.Book
      .findById(req.body[0].id)
      .then(isSaved => {
        // console.log("isSaved:", isSaved)
        if (!isSaved) {
          // console.log("server side:", req.body)
          // db.Book.insertMany([{
          db.Book.collection.insertMany([{
            _id: req.body[0].id, //optional
            title: req.body[0].volumeInfo.title,
            subtitle: req.body[0].volumeInfo.subtitle,
            authors: req.body[0].volumeInfo.authors,
            rating: req.body[0].volumeInfo.averageRating,
            image: req.body[0].volumeInfo.imageLinks.thumbnail,
            link: req.body[0].volumeInfo.infoLink,
            description: req.body[0].volumeInfo.description,
            saved: true
          }])
            // alert("saved")
            // return (
            //   <SaveBtn>
            //     <h3><i className="fas fa-save"></i></h3>
            //   </SaveBtn>
            // )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        } else {
          alert("it's already saved")
        }
      })
  },

  unsaveBooks: function (req, res) {
    db.Book.findOneAndDelete({ _id: req.params.bookId })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }


};
