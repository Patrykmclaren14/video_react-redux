import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { goodsSlice, init } from '../features/good-slice';
import { fetchGoods } from '../services/good';

export const GoodsList = () => {
  const [newGood, setNewGood] = useState('');
  const { value: goods, isLoading, error } = useAppSelector(state => state.goods)
  const dispatch = useAppDispatch()

  const addGood = (goodToAdd: string) => {
    dispatch(goodsSlice.actions.add(goodToAdd));
  }

  const removeGood = (goodToRemove: string) => {
    dispatch(goodsSlice.actions.take(goodToRemove))
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!newGood) {
      return;
    }

    addGood(newGood);
    setNewGood('');
  };

  useEffect(() => {
    dispatch(init())
  }, [dispatch])

  return (
    <section className="goods">
      <h2>Goods:</h2>

      {error && <p>Something went wrong</p>}
      {isLoading && <p>Loading...</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newGood}
          onChange={e => setNewGood(e.target.value)}
        />
        <button>Add</button>
      </form>

      <ul>
        {goods.map(good => (
          <li key={good}>
            <button
              onClick={() => removeGood(good)} 
              className="delete"
            />

            {good}
          </li>
        ))}
      </ul>
    </section>
  );
};
