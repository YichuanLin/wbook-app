import React from 'react';
import { getListItemFromShoppingCartSelector } from '../../store/selectors';
import { connect } from 'react-redux';

export const ShoppingCartBeConnected = ({ shoppingCart }) => (
  <pre>{JSON.stringify(shoppingCart, null, 2)}</pre>
);

const mapStateToProps = state => ({
  shoppingCart: getListItemFromShoppingCartSelector(state),
});

export const ShoppingCart = connect(mapStateToProps)(ShoppingCartBeConnected);
