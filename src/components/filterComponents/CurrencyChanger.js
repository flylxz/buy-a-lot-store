import { Box, Typography } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
export const CurrencyChanger = ({ currencies, currency, handleCurrency }) => {
  return (
    <Box mb={3}>
      <Typography variant='h4'>Валюта</Typography>
      <ToggleButtonGroup
        style={{ margin: ' 1rem 0 0 1rem' }}
        value={currency}
        exclusive
      >
        {currencies.map((curr) => (
          <ToggleButton
            key={curr.value}
            value={curr.value}
            variant='contained'
            onClick={handleCurrency}
          >
            {curr.value}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};
