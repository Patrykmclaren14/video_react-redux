import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { amountSlice } from '../features/amount-slice';
import { useAppDispatch } from '../app/hooks';

export const Amount = () => {
  const amount = useSelector((state: RootState) => state.amount.value);
  const dispatch = useAppDispatch();

  const take = (value: number) => {
    dispatch(amountSlice.actions.take(value));  
  };

  const add = (value: number) => {
    dispatch(amountSlice.actions.add(value));
  };

  const clear = () => dispatch(amountSlice.actions.clear());

  return (
    <h2 className="amount">
      <span>Amount: {amount}</span>

      <button onClick={() => take(50)}>-50</button>
      <button onClick={() => take(10)}>-10</button>
      <button onClick={clear}>❌</button>
      <button onClick={() => add(10)}>+10</button>
      <button onClick={() => add(50)}>+50</button>
    </h2>
  );
};
