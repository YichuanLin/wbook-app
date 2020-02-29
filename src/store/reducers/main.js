import { combineReducers } from 'redux';
import { bookListReducer as bookList } from './book-list';

export const rootReducer = combineReducers({
  bookList,
});
