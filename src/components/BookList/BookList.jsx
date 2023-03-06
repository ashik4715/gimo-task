import React from "react";
import { useGlobalContext } from "../context";
import Book from "../BookList/Book";
import coverImg from "../../images/cover_not_found.jpg";

const BookList = () => {
  const { books, resultTitle } = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  const renderHeader = () => {
    let headerElement = [
      "id",
      "Cover",
      "Title",
      "Author",
      "Publish Year",
      "Total Editions",
      "Description",
    ];
    return headerElement.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };

  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booklist-content">
          <table id="employee">
            <thead>
              <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
              {booksWithCovers.slice(0, 50).map((item, index) => {
                return <Book key={index} {...item} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BookList;
