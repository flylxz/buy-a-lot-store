import React, { useState } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { AddItem, Filter, ProductsGrid, FloatFilterButton } from './components';

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  filterButton: {
    position: 'fixed',
    left: 20,
    top: 20,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
  },
});

const App = () => {
  const appStyle = useStyles();
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <Container maxWidth='md' justify='center'>
      <FloatFilterButton
        openFilter={setFilterOpen}
        styles={appStyle.filterButton}
      />
      <Filter open={filterOpen} onClose={() => setFilterOpen(false)} />
      <ProductsGrid />
      <AddItem />
    </Container>
  );
};

export default App;
