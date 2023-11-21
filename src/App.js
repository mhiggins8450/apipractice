import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookItem from './components/BookItem';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=9bj42LfKUpjNsLHvMtg1TPkgkOPYCRnM'
        );
        setBooks(response.data.results?.books || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>New York Times Best Sellers<br></br>Hardcover Fiction</h1>
      <div className="book-container">
        {books.map((book, index) => (
          <BookItem key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default App;