import { createSlice } from '@reduxjs/toolkit';
import type { Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { amountSlice } from './amount-slice';

type State = {
  x: number
  y: number 
}

const initialState: State = {
  x: 0,
  y: 0
}

export const positionSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {
    moveLeft: (state, action: PayloadAction<number>) => {
      state.x -= action.payload
    },
    moveRight: (state, action: PayloadAction<number>) => {
      state.x += action.payload
    },
    moveUp: (state, action: PayloadAction<number>) => {
      state.y -= action.payload
    },
    moveDown: (state, action: PayloadAction<number>) => {
      state.y += action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(amountSlice.actions.clear.type, () => initialState)
  },
})

const wait = (time: number) => new Promise(resolve => setTimeout(resolve, time))
const doCircle = (time: number) => async (dispatch: Dispatch) => {
  dispatch(positionSlice.actions.moveRight(1))
  await wait(time)
  dispatch(positionSlice.actions.moveUp(1))
  await wait(time)
  dispatch(positionSlice.actions.moveLeft(1))
  await wait(time)
  dispatch(positionSlice.actions.moveDown(1))
}

export const actions = {
  ...positionSlice.actions,
  doCircle
}