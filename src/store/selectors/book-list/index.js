import { createSelector } from 'reselect';

export const bookListSelector = state => state.bookList;

export const getListFromBookListSelector = createSelector(bookListSelector, bookList => {
  const { list = [] } = bookList;
  const getItem = id => {
    return {
      id: id,
      author: `Tevin Towne ${id}`,
      title: 'Of Mice and Men',
      image: {
        url: null,
      },
      publisher: 'Firebrand Books',
      year: '1923',
      genre: 'Classic',
      created_at: '2016-11-15T22:47:05.919Z',
      updated_at: '2016-11-15T22:47:05.919Z',
    };
  };
  return [getItem(111), getItem(222), , getItem(333)];
});
