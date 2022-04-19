import * as React from 'react';

export interface Todo {
  id: number;
  text: string;
}

export interface AppContextProps {
  todos: Todo[];
  addTodo: (todo: string) => void;
  removeTodo: (todo: Todo) => void;
  clickCounter: number;
  incrementClickCounter: () => void;
}

export const DEFAULT = {
  todos: [],
  addTodo: (): void => {},
  removeTodo: (): void => {},
  clickCounter: 0,
  incrementClickCounter: (): void => {},
};

const AppContext = React.createContext<AppContextProps>(DEFAULT);

export default AppContext;
