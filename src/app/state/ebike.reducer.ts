import { Ebike } from './../ebike';
import { Action, createReducer, on } from "@ngrx/store";
import { increment, decrement, remove, saveBikes } from "./ebike.actions";

export const initialState: Ebike[] = [];

export const counterReducer = createReducer(
  initialState,
  // on(increment, (state: Ebike) => ({...state, count: state.count + 1})),
  // on(decrement, (state: Ebike) => ({...state, count: state.count - 1})),
  // on(remove, (state: Ebike) => ({...state, count: 0})),
  on(saveBikes, (state, action) => action.ebikes),
);
