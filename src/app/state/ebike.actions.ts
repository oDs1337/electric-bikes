import { Ebike } from './../ebike';
import { createAction, props } from "@ngrx/store";

export const increment = createAction('[SHOPPING CART] increment');
export const decrement = createAction('[SHOPPING CART] decrement');
export const remove = createAction('[SHOPPING CART] remove');
export const saveBikes = createAction('[SHOPPING CART] save ebikes', props<{ebikes: Ebike[]}>());
