import { Ebike } from './../ebike';
import { Action, createReducer, on, State } from "@ngrx/store";
import { increment, decrement, remove, saveBikes } from "./ebike.actions";

export const initialState: Ebike[] = [];

export const counterReducer = createReducer(
  initialState,
  on(increment, (state: Ebike[], action) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState[action.index].count += 1;
    return newState;
  }),
  on(decrement, (state: Ebike[], action) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState[action.index].count -= 1;
    return newState;
  }),
  on(remove, (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState[action.index].count = 0;
    return newState;
  }),
  on(saveBikes, (state, action) => action.ebikes),
);
