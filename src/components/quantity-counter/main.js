import React from 'react';

export const QuantityCounter = ({ updateQuantity, quantity = 0 }) => {
  const handlerClickIncrement = () => {
    updateQuantity && updateQuantity(quantity + 1);
  };

  const handlerClickDecrement = () => {
    const newQuantity = quantity === 0 ? 0 : quantity - 1;
    updateQuantity && updateQuantity(newQuantity);
  };

  const handlerChange = event => {
    updateQuantity && updateQuantity(event.target.value);
  };
  return (
    <>
      <button onClick={handlerClickDecrement}>-</button>
      <input type="number" value={quantity} onChange={handlerChange} />
      <button onClick={handlerClickIncrement}>+</button>
    </>
  );
};
