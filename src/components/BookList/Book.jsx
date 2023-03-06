import React from "react";
// import { Link } from "react-router-dom";
import "./Book.css";

const Book = (book) => {
  return (
    // <div className="book-item flex flex-column flex-sb">
    //   <div className="book-item-img">
    //     <img src={book.cover_img} alt="cover" />
    //   </div>
    //   <div className="book-item-info text-center">
    //     <Link to={`/book/${book.id}`} {...book}>
    //       <div className="book-item-info-item title fw-7 fs-18">
    //         <span className="text-capitalize fw-7">Title: </span>
    //         <span>{book.title}</span>
    //       </div>
    //     </Link>

    //     <div className="book-item-info-item author fs-15">
    //       <span className="text-capitalize fw-7">Author: </span>
    //       <span>{book.author}</span>
    //     </div>

    //     <div className="book-item-info-item edition-count fs-15">
    //       <span className="text-capitalize fw-7">Total Editions: </span>
    //       <span>{book.edition_count}</span>
    //     </div>

    //     <div className="book-item-info-item publish-year fs-15">
    //       <span className="text-capitalize fw-7">First Publish Year: </span>
    //       <span>{book.first_publish_year}</span>
    //     </div>
    //     <div className="book-item-info-item publish-year fs-15">
    //       <span className="text-capitalize fw-7">Book Description: </span>
    //       <span>
    //         {book.first_sentence ? book.first_sentence : "No description found"}
    //       </span>
    //     </div>
    //   </div>
    // </div>

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
