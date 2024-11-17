import React from "react";

export default function BookCard({ title, body }) {
  return (
    <div className="book-card">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
