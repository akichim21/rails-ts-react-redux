import { handleActions, Reducer } from "redux-actions";
import { INIT_COUNT, INCREMENT_COUNT, DECREMENT_COUNT } from 'constants/ActionTypes';
import { IAction } from 'constants/ReduxAction';

export interface ICounterState {
  count: number;
}

const INITIAL_STATE: ICounterState = {
  count: 0,
};

export const counterReducers: Reducer<any, any>
  = handleActions(
    {
      [INIT_COUNT]: (state: ICounterState, action: IAction<number>): ICounterState => ({
        count: action.payload,
      }),
      [INCREMENT_COUNT]: (state: ICounterState, action: IAction<number>): ICounterState => ({
        count: state.count + action.payload,
      }),
      [DECREMENT_COUNT]: (state: ICounterState, action: IAction<number>): ICounterState => ({
        count: state.count - action.payload,
      }),
    },
    INITIAL_STATE,
  );
