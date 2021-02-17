import {
  Box,
  Typography,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';

export const SortBy = ({ sorting, sort, order, handleSort }) => {
  return (
    <Box mb={3}>
      <Typography variant='h4'>Сортировка</Typography>
      <FormControl component='fieldset'>
        <RadioGroup style={{ margin: '0 0 0 1rem' }} value={`${sort}_${order}`}>
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
  );
};
