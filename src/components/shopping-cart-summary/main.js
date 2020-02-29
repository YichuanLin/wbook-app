import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import QuantityCounter from '../quantity-counter';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const SummaryShoppingCart = ({
  shoppingCart,
  addItemsToShoppingCart,
  removeItemsToShoppingCart,
}) => {
  const classes = useStyles();

  const handlerUpdateQuantity = (_, action, id) => {
    const data = { id, quantity: 1 };
    if (action === 'increment') {
      addItemsToShoppingCart(data);
    } else {
      removeItemsToShoppingCart(data);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Título</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shoppingCart.map(item => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.title}
              </TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">
                <QuantityCounter
                  quantity={item.quantity}
                  updateQuantity={(quantity, action) =>
                    handlerUpdateQuantity(quantity, action, item.id)
                  }
                />
              </TableCell>
              <TableCell align="right">{item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
