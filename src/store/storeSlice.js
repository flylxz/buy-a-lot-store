import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  sort: 'price',
  order: 'desc',
  gte: '0',
  lte: '99999',
  currency: 'USD',
  exchangeRate: 0.036,
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (state = initialState) => {
    try {
      const response = await fetch(
        `http://localhost:5000/products?_sort=${state.sort}&price_gte=${state.gte}&price_lte=${state.lte}&_order=${state.order}`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      return console.log(err.response.data);
    }
  }
);

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setGte: (state, action) => ({ ...state, gte: action.payload }),
    setLte: (state, action) => ({ ...state, lte: action.payload }),
    setSort: (state, action) => ({
      ...state,
      sort: action.payload.sort,
      order: action.payload.order,
    }),
    setCurrency: (state, action) => ({ ...state, currency: action.payload }),
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.products = [...action.payload];
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default storeSlice.reducer;

export const { setGte, setLte, setSort, setCurrency } = storeSlice.actions;

// export const fetchProducts = (state) => async (dispatch) => {
//   try {
//     const data = await fetch(
//       `http://localhost:5000/products?_sort=${state.sort}&price_gte=${state.gte}&price_lte=${state.lte}&_order=${state.order}`
//     );
//     const res = await data.json();
//     console.log(res);
//     dispatch(res);
//   } catch (error) {
//     console.log('error: ', error.message);
//   }
// };
