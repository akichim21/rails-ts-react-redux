import { createAction, ActionFunction1, Action } from 'redux-actions';
import { INIT_COUNT, INCREMENT_COUNT, DECREMENT_COUNT } from 'constants/ActionTypes';

export const initCount: ActionFunction1<number, Action<number>> =
  createAction<number, number>(
    INIT_COUNT,
    (count: number): number => {
      return count;
    },
  );

export const incrementCount: ActionFunction1<number, Action<number>> =
  createAction<number, number>(
    INCREMENT_COUNT,
    (count: number): number => {
      return count;
    },
  );

export const decrementCount: ActionFunction1<number, Action<number>> =
  createAction<any, any>(
    DECREMENT_COUNT,
    (count: number): number => {
      return count;
    },
  );
