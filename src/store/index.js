import { configureStore } from '@reduxjs/toolkit';
import reducer from './storeSlice';

const store = configureStore({
  reducer,
});

export default store;
