import { combineReducers } from 'redux';
import { bookListReducer as bookList } from './book-list';
import { shoppingCartReducer as shoppingCart } from './shopping-cart';

export const rootReducer = combineReducers({
  bookList,
  shoppingCart,
});
