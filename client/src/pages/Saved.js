import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";
// import SaveBtn from "../components/SaveBtn";
import UnsaveBtn from "../components/UnsaveBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import "./style.css";
// import { Link } from "react-router-dom";
// import { relative } from "path";
// import Description from "../components/Description";
class Books extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  UnsaveBtnSubmit = bookId => {
    API.unsaveTheBook(bookId)
    .then(res => this.loadBooks())
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Results>
              <div className="h1">Saved Books</div>
              {this.state.books.length ? (
                <List>
                  {this.state.books
                    .map(book => (
                      <ListItem key={book._id} children={book}>
                        <a href={book.link}>
                          <h3>{book.title}</h3>
                        </a>
                        {book.subtitle ? <h4>—— {book.subtitle}</h4> : console.log(" books w/o subtitles")}
                        <h5>by {book.authors}<i>{console.log(book)}</i></h5>
                        {book.rating ? <h6 className="rating">Rating: {book.rating}</h6> : console.log(" books w/o rating")}
                        {/* <SaveBtn onClick={() => this.saveBtnSubmit(book.id)} /> */}
                        <UnsaveBtn onClick={() => this.UnsaveBtnSubmit(book._id)} />
                        {/* <Description img={book.image} des={book.description} > */}
                        {book.image ? <img className="col-md-3 mx-auto img" alt="book" src={book.image} /> : console.log(" books w/o image")}
                        <div className="col-md-9 mx-auto des">{book.description}</div>
                        {/* </Description> */}
                      </ListItem>
                    ))
                  }
                </List>
              ) : (
                  <h3> &nbsp; No Results to Display</h3>
                )}
            </Results>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
