import { useCallback, useState } from 'react';
import { AppContextProps, Todo } from './AppContext';

const useAppContext = (): AppContextProps => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((todo: string): void => {
    setTodos((todos) => [...todos, {id: todos.length, text: todo}]);
  }, []);

  const removeTodo = useCallback((todo: Todo): void => {
    setTodos((todos) => todos.filter(x => x.id === todo.id));
  }, []);

  const [clickCounter, setClickCounter] = useState(0);

  const incrementClickCounter = useCallback((): void => {
    setClickCounter((clickCounter) => clickCounter + 1);
  }, []);

  return {
    todos,
    addTodo,
    removeTodo,
    clickCounter,
    incrementClickCounter,
  };
};

export default useAppContext;
