import { Ebike } from './../ebike';
import { Action, createReducer, on } from "@ngrx/store";
import { increment, decrement, remove } from "./ebike.actions";

export const initialState: Ebike = {image: '', name: '', description: '', price: 0, currency: '', count: 0};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state: Ebike) => ({...state, image: state.image, name: state.name, description: state.description, price: state.price, currency: state.currency, count: state.count + 1})),
  on(decrement, (state: Ebike) => ({...state, image: state.image, name: state.name, description: state.description, price: state.price, currency: state.currency, count: state.count - 1})),
  on(remove, (state: Ebike) => ({...state, image: state.image, name: state.name, description: state.description, price: state.price, currency: state.currency, count: 0})),
);
