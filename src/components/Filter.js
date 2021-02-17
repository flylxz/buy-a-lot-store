import { useDispatch, useSelector } from 'react-redux';
import {
  Drawer,
  Container,
  Box,
  Typography,
  TextField,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';

import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

import { setGte, setLte, setSort, setCurrency } from '../store/storeSlice';

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
    console.log(num, type);
    if (type === 'gte') {
      dispatch(setGte(num));
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
        <Box mt={5} mb={3}>
          <Typography variant='h4'>Цена</Typography>
          <Box justifyContent='space-between'>
            <FormControl
              margin='dense'
              style={{ display: 'flex', flexDirection: 'row' }}
            >
              {fromTo.map(({ label, type, value, inputProps, dataType }) => (
                <TextField
                  key={label}
                  style={{ margin: '0 1rem', width: 80 }}
                  label={label}
                  type={type}
                  value={value}
                  onChange={(e) => handlePriceLimits(e.target.value, dataType)}
                  InputProps={inputProps}
                />
              ))}
            </FormControl>
          </Box>
        </Box>
        <Box mb={3}>
          <Typography variant='h4'>Валюта</Typography>
          <ToggleButtonGroup
            style={{ margin: ' 1rem 0 0 1rem' }}
            value={currency}
            exclusive
            onChange={handleCurrency}
          >
            {currencies.map((curr) => (
              <ToggleButton
                key={curr.value}
                value={curr.value}
                variant='contained'
              >
                {curr.value}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
        <Box mb={3}>
          <Typography variant='h4'>Сортировка</Typography>
          <FormControl component='fieldset'>
            <RadioGroup
              style={{ margin: '0 0 0 1rem' }}
              value={`${sort}_${order}`}
            >
              {sorting.map(({ name, value, dataSort, dataOrder }) => (
                <FormControlLabel
                  key={value}
                  onChange={() => handleSort(dataSort, dataOrder)}
                  value={value}
                  control={<Radio color='default' />}
                  label={name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      </Container>
    </Drawer>
  );
};
