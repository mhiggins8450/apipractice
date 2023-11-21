import React from 'react';

const BookItem = ({ book }) => {
  const {
    title,
    author,
    description,
    book_image,
    buy_links,
    publisher,
    primary_isbn13,
  } = book;

  return (
    <div className="book-item">
      <img src={book_image} alt={title} className="book-image" />
      <div className="book-details">
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Publisher: {publisher}</p>
        <p>Description: {description}</p>
        <p>ISBN-13: {primary_isbn13}</p>
        <div className="buy-links">
          <p>Buy Links:</p>
          <ul>
            {buy_links.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookItem;