import { Ebike } from './../ebike';
import { createAction, props } from "@ngrx/store";

export const increment = createAction('[SHOPPING CART] increment', props<{index: number}>());
export const decrement = createAction('[SHOPPING CART] decrement', props<{index: number}>());
export const remove = createAction('[SHOPPING CART] remove', props<{index: number}>());
export const saveBikes = createAction('[SHOPPING CART] save ebikes', props<{ebikes: Ebike[]}>());
