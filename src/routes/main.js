import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BookList from '../views/book-list';
import ShoppingCart from '../views/shopping-cart';

export const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={BookList} />
    <Route exact path="/checkout" component={ShoppingCart} />
  </Switch>
);
