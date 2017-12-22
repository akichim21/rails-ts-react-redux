import { counterReducers, ICounterState } from './counterReducers';

export type ReduxState = {
  counterReducers: ICounterState,
};

export const reducers: any = {
  counterReducers,
};
