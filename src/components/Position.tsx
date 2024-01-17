import { actions } from '../features/position-slice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

export const Position = () => {
  const { x, y } = useAppSelector(state => state.position)
  const dispatch = useAppDispatch()

  const moveLeft = () => dispatch(actions.moveLeft(1));
  const moveRight = () => dispatch(actions.moveRight(1));
  const moveUp = () => dispatch(actions.moveUp(1));
  const moveDown = () => dispatch(actions.moveDown(1));

  const transformValue = `translate(${x * 100}%, ${y * 100}%)`;

  const dance = () => {
    dispatch(actions.doCircle(300))
  }

  return (
    <section className="position">
      <h2>Position:</h2>

      <div className="position__content">
        <div className="buttons">
          <button onClick={moveUp}>&uarr;</button>

          <div>
            <button onClick={moveLeft}>&larr;</button>
            <strong>{x}:{y}</strong>
            <button onClick={moveRight}>&rarr;</button>
          </div>

          <button onClick={moveDown}>&darr;</button>
        </div>

        <div className="field">
          <div className="track" style={{ transform: transformValue }} onClick={dance}>
            {x + y}
          </div>
        </div>
      </div>
    </section>
  );
};
