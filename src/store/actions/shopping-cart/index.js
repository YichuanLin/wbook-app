export const ACTIONS = {
  SHOPPING_CART_ADD_ITEM: 'SHOPPING_CART/ADD_ITEM',
  SHOPPING_CART_REMOVE_ITEM: 'SHOPPING_CART/REMOVE_ITEM',
};

const addItemsToShoppingCart = data => ({
  type: ACTIONS.SHOPPING_CART_ADD_ITEM,
  payload: data,
});

export const ACTIONS_CREATOR = {
  addItemsToShoppingCart,
};
