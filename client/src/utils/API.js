import axios from "axios";

export default {

  getBooks: function () {
    return axios.get("/api/books");
  },
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },


  searchBooks: (bookTitle) => {
    bookTitle = bookTitle.trim().split(" ").join("+");
    console.log("client side:", bookTitle);
    return axios.get(`/api/books/search/${bookTitle}`);
  },
  saveTheBook: (bookData) => {
    console.log("theBook:", bookData);
    return axios.post("/api/books/save", bookData);
    // return axios.post(`/api/books/save/${bookData}`);
  },
  unsaveTheBook: (bookId) => {
    console.log("theBook:", bookId);
    return axios.put(`/api/books/unsave/${bookId}`);
  },
};
