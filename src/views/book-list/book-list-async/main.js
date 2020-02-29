import React, { useState } from 'react';
import BookCard from '../../../components/book-card';
import OrderListOptions from '../../../components/order-list-options';
import { sortListByOption } from '../utils';

export const BookListAsync = ({ error, list, isFetching, addItemsToShoppingCart }) => {
  const [sortDirection, setSortDirection] = useState('ASC');
  const [sortField, setSortField] = useState('price');

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

  const books = sortListByOption(list, {
    direction: sortDirection,
    field: sortField,
  }).map((item, index) => (
    <BookCard key={index} book={item} addItemsToShoppingCart={addItemsToShoppingCart} />
  ));

  const handlerChange = sortOption => {
    setSortDirection(sortOption.direction);
    setSortField(sortOption.field);
  };

  return (
    <div className="book-list-async">
      <div>
        <OrderListOptions onChange={handlerChange} />
      </div>
      {books}
    </div>
  );
};
