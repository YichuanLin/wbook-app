import React from 'react';
import BookCard from '../../../components/book-card';

export const BookListAsync = ({ error, list, isFetching, addItemsToShoppingCart }) => {
  if (isFetching) {
    return (
      <div className="book-list-async__loader-wrapper">
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  if (!list || !list.length) {
    return <p>Empty...</p>;
  }

  const books = list.map((item, index) => (
    <BookCard key={index} book={item} addItemsToShoppingCart={addItemsToShoppingCart} />
  ));

  return <div className="book-list-async">{books}</div>;
};
