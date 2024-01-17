import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { amountSlice } from '../features/amount-slice';
import { positionSlice } from '../features/position-slice';
import { goodsSlice } from '../features/good-slice';

const reducer = combineReducers({
  amount: amountSlice.reducer,
  goods: goodsSlice.reducer,
  position: positionSlice.reducer,
});
const store = configureStore({
  reducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
