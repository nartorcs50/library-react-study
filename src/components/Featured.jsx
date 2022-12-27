import React from "react";
import Book from "./ui/Book";
import { books } from "../data.js";

const Featured = () => {
  console.log(books.filter((book) => book.rating === 5).slice(0, 4));
  function getFiveStarBooks() {}
  return (
    <section id="featured">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books
              .filter((book) => book.rating === 5)
              .slice(0, 4)
              .map((book, index) => ( 
                <Book book={book} key={index}/>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
