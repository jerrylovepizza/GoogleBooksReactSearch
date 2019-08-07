require("dotenv").config();

const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);



// Matches with "/api/books/search/:bookTitle"
router
  .route("/search/:bookTitle")
  .get(booksController.searchBooks)

// Matches with "/api/books/save"
router
  .route("/save")
  .post(booksController.saveBooks);

// Matches with "/api/books/unsave/:bookId"
router
  .route("/unsave/:bookId")
  .put(booksController.unsaveBooks);

module.exports = router;
