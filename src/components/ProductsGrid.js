import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';

import { SimpleAlert } from './SimpleAlert';
import { ProductCard } from './ProductCard';
import { fetchProducts } from '../store/storeSlice';

export const ProductsGrid = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchProducts(state));
  }, [dispatch, state.sort, state.gte, state.lte, state.order]);

  if (state.status === 'loading') {
    return <SimpleAlert message='loading...' type='info' />;
  }

  if (state.status === 'failed') {
    return <SimpleAlert message={state.error} type='error' />;
  }

  return (
    <Container maxWidth='md' style={{ padding: '30px 0 250px 0' }}>
      <Grid container spacing={3}>
        {state.products.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} lg={4}>
            <ProductCard
              item={item}
              currency={state.currency}
              exchangeRate={state.exchangeRate}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
