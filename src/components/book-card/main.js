import React, { useState } from 'react';
import QuantityCounter from '../quantity-counter';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import './main.scss';

const DISPLAY_LIST_ITEMS = [
  {
    label: 'Titulo',
    field: 'title',
  },
  {
    label: 'Descripción',
    field: 'description',
  },
  {
    label: 'Precio',
    field: 'price',
  },
  {
    label: 'Año',
    field: 'year',
  },
  {
    label: 'Autor',
    field: 'author',
  },
];

export const BookCard = ({ book, addItemsToShoppingCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handlerAddItemToShoppingCart = () => {
    addItemsToShoppingCart({ id: book.id, quantity });
  };

  const buttonDisabled = quantity === 0;

  const listItems = DISPLAY_LIST_ITEMS.map((item, index) => {
    const itemLabel = (
      <>
        <b>{item.label}: </b>
        {book[item.field]}
      </>
    );
    return (
      <ListItem key={index} button>
        <ListItemText primary={itemLabel} />
      </ListItem>
    );
  });

  return (
    <>
      <Card className="book-card">
        <CardContent>
          <List component="nav" aria-label="secondary mailbox folders">
            {listItems}
          </List>
        </CardContent>
        <CardActions>
          <div className="book-card--actions">
            <QuantityCounter updateQuantity={setQuantity} quantity={quantity} />
            <Button
              variant="contained"
              color="primary"
              disabled={buttonDisabled}
              onClick={handlerAddItemToShoppingCart}
            >
              Add to cart
            </Button>
          </div>
        </CardActions>
      </Card>
    </>
  );
};
