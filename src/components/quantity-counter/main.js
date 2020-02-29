import React, { useState } from 'react';

export const QuantityCounter = ({ updateQuantity, quantity = 0 }) => {
  const handlerClickIncrement = () => {
    updateQuantity && updateQuantity(quantity + 1);
  };

  const handlerClickDecrement = () => {
    const newQuantity = quantity === 0 ? 0 : quantity - 1;
    updateQuantity && updateQuantity(newQuantity);
  };
  return (
    <>
      <button onClick={handlerClickDecrement}>-</button>
      <input type="number" value={quantity} />
      <button onClick={handlerClickIncrement}>+</button>
    </>
  );
};
