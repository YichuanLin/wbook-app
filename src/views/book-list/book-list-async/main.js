import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BookCard from '../../../components/book-card';
import OrderListOptions from '../../../components/order-list-options';
import { sortListByOption } from '../utils';
import Grid from '@material-ui/core/Grid';

import CircularProgress from '@material-ui/core/CircularProgress';

import './main.scss';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export const BookListAsync = ({ error, list, isFetching, addItemsToShoppingCart }) => {
  const [sortDirection, setSortDirection] = useState('ASC');
  const [sortField, setSortField] = useState('price');
  const classes = useStyles();

  if (isFetching) {
    return (
      <div className="book-list-async__loader-wrapper">
        <CircularProgress color="secondary" />
      </div>
    );
  }
  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  if (!list || !list.length) {
    return <p>Empty...</p>;
  }

  const books = sortListByOption(list, {
    direction: sortDirection,
    field: sortField,
  }).map((item, index) => (
    <Grid item>
      <BookCard key={index} book={item} addItemsToShoppingCart={addItemsToShoppingCart} />
    </Grid>
  ));

  const handlerChange = sortOption => {
    setSortDirection(sortOption.direction);
    setSortField(sortOption.field);
  };

  return (
    <div className="book-list-async">
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} sm={12} justify="flex-end">
          <OrderListOptions onChange={handlerChange} />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {books}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
