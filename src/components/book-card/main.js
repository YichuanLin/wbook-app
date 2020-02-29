import React, { useState } from 'react';
import QuantityCounter from '../quantity-counter';

export const BookCard = ({ book, addItemsToShoppingCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handlerAddItemToShoppingCart = () => {
    addItemsToShoppingCart({ id: book.id, quantity });
  };

  const buttonDisabled = quantity === 0;

  return (
    <>
      <pre>{JSON.stringify(book, null, 2)}</pre>
      <QuantityCounter updateQuantity={setQuantity} quantity={quantity} />
      <button disabled={buttonDisabled} onClick={handlerAddItemToShoppingCart}>
        Add to cart {quantity}
      </button>
    </>
  );
};
