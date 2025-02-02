import type { Immutable } from "@lauf/store";

export interface CounterState {
  counter: number;
}

export const INITIAL_STATE: Immutable<CounterState> = {
  counter: 0,
} as const;
