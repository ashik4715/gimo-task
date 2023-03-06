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
  console.log(booksWithCovers);
  function getColumnIndex(column) {
    const headerRow = document.querySelector("thead tr");
    const headers = Array.from(headerRow.querySelectorAll("th"));
    return (
      headers.findIndex(
        (header) => header.textContent.toLowerCase() === column.toLowerCase()
      ) + 1
    );
  }
  function sortTable(column) {
    const table = document.getElementById("employee");
    const rows = Array.from(table.querySelectorAll("tbody tr"));

    const sortedRows = rows.sort((a, b) => {
      const aValue = a.querySelector(
        `td:nth-child(${getColumnIndex(column)})`
      ).textContent;
      const bValue = b.querySelector(
        `td:nth-child(${getColumnIndex(column)})`
      ).textContent;
      return aValue.localeCompare(bValue, undefined, { numeric: true });
    });

    while (table.tBodies[0].firstChild) {
      table.tBodies[0].removeChild(table.tBodies[0].firstChild);
    }

    table.tBodies[0].append(...sortedRows);
  }
  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h1 id="caption">Tap table's id, title, author to Sort books</h1>
        </div>
        <div className="booklist-content">
          <table id="employee">
            <thead>
              <tr>
                <th onClick={() => sortTable("id")}>id</th>
                <th onClick={() => sortTable("cover_id")}>Cover</th>
                <th onClick={() => sortTable("title")}>Title</th>
                <th onClick={() => sortTable("author")}>Author</th>
                <th onClick={() => sortTable("first_publish_year")}>
                  Publish Year
                </th>
                <th onClick={() => sortTable("edition_count")}>
                  Total Edition
                </th>
                <th onClick={() => sortTable("first_sentence")}>Description</th>
              </tr>
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
