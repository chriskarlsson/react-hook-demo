import { useCallback, useEffect, useMemo, useState } from 'react';
import { AppContextProps, Todo } from './AppContext';

function useAppContext(): AppContextProps {
  useEffect(() => { console.log('Executing useAppContext function') });
  useEffect(() => { console.log('Mounting useAppContext') }, []);
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((todo: string): void => {
    setTodos((todos) => [...todos, { id: todos.length + 1, text: todo }]);
  }, []);

  const removeTodo = useCallback((todo: Todo): void => {
    setTodos((todos) => todos.filter(x => x.id !== todo.id));
  }, []);

  const [clickCounter, setClickCounter] = useState(0);

  const incrementClickCounter = useCallback((): void => {
    setClickCounter((clickCounter) => clickCounter + 1);
  }, []);

  return useMemo(() => {
    return {
      todos,
      addTodo,
      removeTodo,
      clickCounter,
      incrementClickCounter,
    }
  }, [todos, addTodo, removeTodo, clickCounter, incrementClickCounter]);
};

export default useAppContext;
