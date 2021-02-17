import { Box, Typography, TextField, FormControl } from '@material-ui/core';

export const PriceLimiter = ({ fromTo, handlePriceLimits }) => {
  return (
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
  );
};
