import React from 'react';

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
  const options = optionsData.map((option, index) => (
    <option key={index} value={index}>
      {option.label}
    </option>
  ));
  const handlerChange = event => {
    onChange(optionsData[event.target.value]);
  };
  return <select onChange={handlerChange}>{options}</select>;
};
