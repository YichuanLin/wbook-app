import { createSelector } from 'reselect';

export const bookListSelector = state => state.bookList;

export const getListFromBookListSelector = createSelector(bookListSelector, bookList => {
  const { list } = bookList;
  return list;
});
