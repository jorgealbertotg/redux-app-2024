import { Action, createReducer, on } from "@ngrx/store";
import { decrementar, dividir, incrementar, multiplicar, reset } from "./contador.actions";

// export function contadorReducer(state: number = 10, action: Action) {
//   switch(action.type) {
//     case incrementar.type:
//       return state + 1;
//     case decrementar.type:
//         return state - 1;
//     default:
//       return state;
//   }
// }s

export const initialState: number = 20;

const _contadorReducer = createReducer(initialState,
  on(incrementar, state => state + 1),
  on(decrementar, state => state - 1),
  on(multiplicar, (state, props) => state * props.numero),
  on(dividir, (state, props) => state / props.numero),
  on(reset, state => 0)
);

export function contadorReducer(state: any, action: Action) {
  return _contadorReducer(state, action);
}