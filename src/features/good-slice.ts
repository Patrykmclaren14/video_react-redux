import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchGoods } from '../services/good';

type State = {
  value: string[]
  isLoading: boolean;
  error: null | string
}

const initialState: State = {
  value: [],
  isLoading: false,
  error: null,
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    set: (state, action: PayloadAction<string[]>) => {
      state.error = null;
      state.value = action.payload;
    },
    add: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload)
    },
    take: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        value: state.value.filter(good => good !== action.payload)
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.isLoading = true;
    })

    builder.addCase(init.fulfilled, (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
    })

    builder.addCase(init.rejected, (state) => {
      state.error = 'Something went wrong';
      state.isLoading = false;
    })
  },
})

export const init = createAsyncThunk('good/fetch', () => {
  return  fetchGoods()
})