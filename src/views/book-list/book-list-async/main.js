import React from 'react';

export const BookListAsync = ({ error, list, isFetching }) => {
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

  return (
    <div className="book-list-async">
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </div>
  );
};
