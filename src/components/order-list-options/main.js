import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const optionsData = [
  {
    direction: 'ASC',
    field: 'price',
    label: 'Por precio ascendente',
  },
  {
    direction: 'DESC',
    field: 'price',
    label: 'Por precio descendiente',
  },
  {
    direction: 'ASC',
    field: 'created_at',
    label: 'Por fecha de publicación ascendente',
  },
  {
    direction: 'DESC',
    field: 'created_at',
    label: 'Por fecha de publicación descendiente',
  },
];

export const OrderListOptions = ({ onChange }) => {
  const classes = useStyles();
  const options = optionsData.map((option, index) => (
    <MenuItem key={index} value={index}>
      {option.label}
    </MenuItem>
  ));
  const handlerChange = event => {
    onChange(optionsData[event.target.value]);
  };
  return (
    <FormControl fullwidth className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Ordenar por</InputLabel>
      <Select labelId="demo-simple-select-label" id="demo-simple-select" onChange={handlerChange}>
        {options}
      </Select>
    </FormControl>
  );
};
