import { ACTIONS } from '../../actions';

const INITIAL_STATE = { items: {} };

const incrementItemNumber = (state, id, quantity) => {
  let currentItems = { ...state.items };
  if (!currentItems[id]) {
    return { ...currentItems, [id]: quantity };
  }

  return { ...currentItems, [id]: currentItems[id] + quantity };
};

const decrementItemNumber = (state, id, quantity) => {
  let currentItems = { ...state.items };
  if (!currentItems[id]) {
    return currentItems;
  }
  if (currentItems[id] - quantity > 0) {
    return { ...currentItems, [id]: currentItems[id] - quantity };
  }

  const { [id]: _, ...restItems } = currentItems;
  return restItems;
};

export const shoppingCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.SHOPPING_CART_ADD_ITEM: {
      const { id, quantity } = action.payload;
      const items = incrementItemNumber(state, id, quantity);
      return {
        ...state,
        items,
      };
    }
    case ACTIONS.SHOPPING_CART_REMOVE_ITEM: {
      const { id, quantity } = action.payload;
      const items = decrementItemNumber(state, id, quantity);
      return {
        ...state,
        items,
      };
    }
    default:
      return state;
  }
};
