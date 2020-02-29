import React from 'react';
import { getListItemFromShoppingCartSelector, getTotalAmountSelector } from '../../store/selectors';
import { ACTIONS_CREATOR } from '../../store/actions';
import { connect } from 'react-redux';
import SummaryShoppingCart from '../../components/shopping-cart-summary';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import './main.scss';

export const ShoppingCartBeConnected = ({
  shoppingCart,
  addItemsToShoppingCart,
  removeItemsToShoppingCart,
  totalAmount,
}) => {
  const buttonDisabled = shoppingCart.length === 0;
  return (
    <div className="shopping-cart">
      <SummaryShoppingCart
        shoppingCart={shoppingCart}
        addItemsToShoppingCart={addItemsToShoppingCart}
        removeItemsToShoppingCart={removeItemsToShoppingCart}
      />
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Total</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={totalAmount}
          readOnly
          startAdornment={<InputAdornment position="end">$</InputAdornment>}
          labelWidth={60}
        />
      </FormControl>
      <Button variant="contained" color="primary" disabled={buttonDisabled} onClick={() => {}}>
        Ir a pagar
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  shoppingCart: getListItemFromShoppingCartSelector(state),
  totalAmount: getTotalAmountSelector(state),
});

const mapDispatchToProps = dispatch => ({
  addItemsToShoppingCart: data => dispatch(ACTIONS_CREATOR.addItemsToShoppingCart(data)),
  removeItemsToShoppingCart: data => dispatch(ACTIONS_CREATOR.removeItemsToShoppingCart(data)),
});

export const ShoppingCart = connect(mapStateToProps, mapDispatchToProps)(ShoppingCartBeConnected);
