import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import TextField from '@material-ui/core/TextField';

export const QuantityCounter = ({ updateQuantity, quantity = 0 }) => {
  const handlerClickIncrement = () => {
    updateQuantity && updateQuantity(quantity + 1, 'increment');
  };

  const handlerClickDecrement = () => {
    const newQuantity = quantity === 0 ? 0 : quantity - 1;
    updateQuantity && updateQuantity(newQuantity, 'decrement');
  };

  const handlerChange = event => {
    updateQuantity && updateQuantity(event.target.value);
  };
  return (
    <div className="quantity-counter">
      <IconButton color="primary" onClick={handlerClickDecrement}>
        <RemoveCircleOutlineIcon fontSize="large" />
      </IconButton>
      <TextField
        className="quantity-counter--input"
        id="outlined-number"
        type="number"
        variant="outlined"
        value={quantity}
        onChange={handlerChange}
      />
      <IconButton color="primary" onClick={handlerClickIncrement}>
        <ControlPointIcon fontSize="large" />
      </IconButton>
    </div>
  );
};
