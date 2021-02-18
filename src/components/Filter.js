import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer, Container } from '@material-ui/core';

import { setGte, setLte, setSort, setCurrency } from '../store/storeSlice';

import { SortBy, CurrencyChanger, PriceLimiter } from './filterComponents';

const currencies = [
  { name: 'USD', value: 'USD' },
  { name: 'UAH', value: 'UAH' },
];

const sorting = [
  {
    name: 'По возрастанию цены',
    value: 'price_asc',
    dataSort: 'price',
    dataOrder: 'asc',
  },
  {
    name: 'По убыванию цены',
    value: 'price_desc',
    dataSort: 'price',
    dataOrder: 'desc',
  },
  {
    name: 'По алфавиту',
    value: 'name_asc',
    dataSort: 'name',
    dataOrder: 'asc',
  },
];

export const Filter = ({ open, onClose }) => {
  const {
    gte,
    lte,
    sort,
    order,
    currency,
    exchangeRate,
    products,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [gteValue, setGteValue] = useState(gte);
  const [lteValue, setLteValue] = useState(lte);

  const fromTo = [
    {
      dataType: 'gte',
      label: 'От',
      type: 'number',
      // value: gteValue,
      value:
        currency === 'UAH'
          ? Math.min(...products.map((p) => p.price))
          : Math.ceil(Math.min(...products.map((p) => p.price)) * exchangeRate),
      inputProps: { inputProps: { min: gte, max: lte } },
    },
    {
      dataType: 'lte',
      label: 'До',
      type: 'number',
      // value: lteValue,
      value:
        currency === 'UAH'
          ? Math.max(...products.map((p) => p.price))
          : Math.ceil(Math.max(...products.map((p) => p.price)) * exchangeRate),
      inputProps: { inputProps: { min: gte, max: lte } },
    },
  ];

  const handleCurrency = (e, curr) => dispatch(setCurrency(curr));

  const handleSort = (sort, order) => {
    dispatch(setSort({ sort, order }));
  };

  const handlePriceLimits = (num, type) => {
    // const convertedNum = currency === 'UAH' ? +num : +num * exchangeRate;
    // console.log(num, convertedNum);
    if (type === 'gte') {
      setGteValue(num);
      dispatch(setGte(num));
    } else {
      setLteValue(num);
      dispatch(setLte(num));
    }
  };

  return (
    <Drawer
      anchor='left'
      BackdropProps={{ invisible: true }}
      open={open}
      onClose={() => onClose(false)}
    >
      <Container spacing={3}>
        <PriceLimiter fromTo={fromTo} handlePriceLimits={handlePriceLimits} />
        <CurrencyChanger
          currencies={currencies}
          currency={currency}
          handleCurrency={handleCurrency}
        />
        <SortBy
          sorting={sorting}
          sort={sort}
          order={order}
          handleSort={handleSort}
        />
      </Container>
    </Drawer>
  );
};
