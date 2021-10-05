import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import EditBook from "./EditBook";
import { Modal } from "react-bootstrap";

const Book = ({
  id,
  bookname,
  author,
  price,
  quantity,
  date,
  handleRemoveBook,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <Card style={{ width: "18rem" }} className="book">
        <Card.Body>
          <Card.Title className="book-title">{bookname}</Card.Title>
          <div className="book-details">
            <div>Author: {author}</div>
            <div>Quantity: {quantity} </div>
            <div>Price: {price} </div>
            <div>Date: {new Date(date).toDateString()}</div>
          </div>
          <Button variant="primary" onClick={() => setShow(true)}>
            Edit
          </Button>{" "}
          <Button variant="danger" onClick={() => handleRemoveBook(id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
      {show ? (
        <Modal show={show} onHide={handleClose}>
          <EditBook id={id} handleClose={handleClose} />
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default Book;
