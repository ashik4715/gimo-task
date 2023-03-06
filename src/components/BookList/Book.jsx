import React from "react";
// import { Link } from "react-router-dom";
import "./Book.css";

const Book = (book) => {
  return (
    <tr>
      <td>{book.id}</td>
      <td>
        <img src={book.cover_img} className="cover-img" alt="cover" />
      </td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.first_publish_year}</td>
      <td>{book.edition_count}</td>
      <td>
        {book.first_sentence ? book.first_sentence : "No description found"}
      </td>
    </tr>
  );
};

export default Book;
