import { useDispatch, useSelector } from 'react-redux';
import { Drawer, Container } from '@material-ui/core';

import { setGte, setLte, setSort, setCurrency } from '../store/storeSlice';

import { SortBy, CurrencyChanger, PriceLimiter } from './filterComponents';

export const Filter = ({ open, onClose }) => {
  const { gte, lte, sort, order, currency, exchangeRate } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const fromTo = [
    {
      dataType: 'gte',
      label: 'От',
      type: 'number',
      value: currency === 'UAH' ? gte : Math.ceil(gte * exchangeRate),
      inputProps: { inputProps: { min: 0, max: lte } },
    },
    {
      dataType: 'lte',
      label: 'До',
      type: 'number',
      value: currency === 'UAH' ? lte : Math.ceil(lte * exchangeRate),
      inputProps: { inputProps: { min: 0, max: lte } },
    },
  ];

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

  const handleCurrency = (e, curr) => dispatch(setCurrency(curr));

  const handleSort = (sort, order) => {
    dispatch(setSort({ sort, order }));
  };

  const handlePriceLimits = (num, type) => {
    if (type === 'gte') {
      dispatch(
        setGte(currency === 'UAH' ? num : Math.ceil(num * exchangeRate))
      );
      // dispatch(setGte(num));
    } else {
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
