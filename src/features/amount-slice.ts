import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type State = {
  value: number
}

const initialState: State = {
  value: 0,
}

export const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    take: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    },
    clear: (state) => {
      state.value = 0
    },
  }
})