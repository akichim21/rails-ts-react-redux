import { Action } from 'redux-actions';

export interface IAction<Payload> extends Action<Payload> {
  payload: Payload;
}
