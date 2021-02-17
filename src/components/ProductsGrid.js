import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';

import { ProductCard } from './ProductCard';
import { fetchProducts } from '../store/storeSlice';

export const ProductsGrid = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { gte, lte, sort, order, currency, exchangeRate } = useSelector(
    (state) => state
  );

  useEffect(() => {
    fetchData();
  }, [gte, lte, sort, order]);

  const fetchData = async () => {
    const data = await fetch(
      `http://localhost:5000/products?_sort=${sort}&price_gte=${gte}&price_lte=${lte}&_order=${order}`
    );
    const res = await data.json();
    setProducts(res);
  };

  if (!products) {
    return <div>loading</div>;
  }

  return (
    <Container maxWidth='lg'>
      <Grid container spacing={3}>
        {products.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} lg={4}>
            <ProductCard
              item={item}
              currency={currency}
              exchangeRate={exchangeRate}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
