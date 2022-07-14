import { Ebike } from './../ebike';
import { Action, createReducer, on, State } from "@ngrx/store";
import { increment, decrement, remove, saveBikes } from "./ebike.actions";

export const initialState: Ebike[] = [];

export const counterReducer = createReducer(
  initialState,
  on(increment, (state: Ebike[], action) => {
    const test = state
    test[action.index].count += 1
    return [...state]
  }),
  // on(increment, (state: Ebike[], action) => {

  //   const newState: any[] = state.map(obj => {
  //     if (obj.name === state[action.index].name){
  //       return {...state, count: obj.count + 1};
  //     }
  //     else{
  //       return {...state}
  //     }
  //   })
  //   return [...newState]
  // }),
  // on(decrement, (state: Ebike) => ({...state, count: state.count - 1})),
  // on(remove, (state: Ebike) => ({...state, count: 0})),
  on(saveBikes, (state, action) => action.ebikes),
);
