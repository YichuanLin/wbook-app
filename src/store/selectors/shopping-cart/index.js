import { createSelector } from 'reselect';
import { getListFromBookListSelector } from '../book-list';

export const shoppingCartSelector = state => state.shoppingCart;

export const getListItemFromShoppingCartSelector = createSelector(
  shoppingCartSelector,
  getListFromBookListSelector,
  ({ items }, books) => {
    return Object.keys(items).map(bookId => {
      const selectedBook = books.find(book => book.id === Number(bookId));
      const quantity = items[bookId];
      return {
        id: selectedBook.id,
        title: selectedBook.title,
        quantity,
        price: selectedBook.price,
        amount: selectedBook.price * quantity,
      };
    });
  },
);

export const getTotalAmountSelector = createSelector(
  getListItemFromShoppingCartSelector,
  shoppingCartItems =>
    shoppingCartItems.reduce((totalAmount, book) => totalAmount + book.amount, 0),
);
