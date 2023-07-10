import { createContext } from 'react';

const initialState = {
  isFirstPlayer: true,
};

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;
