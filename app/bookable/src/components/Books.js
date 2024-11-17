import React from "react";

function Books(props) {
  return (
    <div>
      <h1>These books are from the API</h1>
      {props.books.map((book) => {
        return <BookCard key={book.id} title={book.title} body={book.body} />;
      })}
    </div>
  );
}

export default Books;
