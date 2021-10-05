import React, { useContext, useState } from "react";
import _ from "lodash";
import { Button, Modal } from "react-bootstrap";
import BooksContext from "../context/BooksContext";

import Book from "./Book";
import AddBook from "./AddBook";

const BooksList = () => {
  const { books, setBooks } = useContext(BooksContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <AddBook setShow={setShow} />
      </Modal>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No available. </p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BooksList;
