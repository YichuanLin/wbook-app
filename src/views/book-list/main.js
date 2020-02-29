import React from 'react';
import WithList from '../../components/with-list';
import BookListConnected from './book-list-connected';

export const BookList = () => (
  <WithList>
    {(list, loading, error) => <BookListConnected list={list} loading={loading} error={error} />}
  </WithList>
);
