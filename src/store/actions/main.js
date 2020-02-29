import { ACTIONS as bookListActions, ACTIONS_CREATOR as bookListActionCreator } from './book-list';
import {
  ACTIONS as shoppingCartActions,
  ACTIONS_CREATOR as shoppingCartActionCreator,
} from './shopping-cart';

export const ACTIONS = {
  ...bookListActions,
  ...shoppingCartActions,
};

export const ACTIONS_CREATOR = {
  ...bookListActionCreator,
  ...shoppingCartActionCreator,
};
