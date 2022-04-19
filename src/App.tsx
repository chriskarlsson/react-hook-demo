import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import AppContext, { Todo } from './AppContext';
import ClickCounterDisplay from './ClickCounterDisplay';
import TodoAdder from './TodoAdder';
import TodoList from './TodoList';

function App() {
  useEffect(() => { console.log('Executing App function') });
  useEffect(() => { console.log('Mounting App') }, []);

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((todo: string): void => {
    setTodos((todos) => [...todos, {id: todos.length, text: todo}]);
  }, []);

  const removeTodo = useCallback((todo: Todo): void => {
    setTodos((todos) => todos.filter(x => x.id !== todo.id));
  }, []);
  const [clickCounter, setClickCounter] = useState(0);

  const incrementClickCounter = (): void => {
    setClickCounter((clickCounter) => clickCounter + 1);
    console.log(`Increasing counter to ${clickCounter}`);
  };

  const [direction, setDirection] = useState('right');
  const toggleDirection = () => {
    setDirection((direction) => direction === 'right' ? 'left' : 'right');
  }
  const logoClasses = `App-logo spin-${direction}`;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={logoClasses} alt="logo" />
        <Button onClick={() => toggleDirection()}>Change direction</Button>
        <p/>
        <AppContext.Provider value={{ todos, addTodo, removeTodo, clickCounter, incrementClickCounter }}>
          <TodoAdder />
          <TodoList />
          <ClickCounterDisplay />
          <Button onClick={() => incrementClickCounter()}>Increment</Button>
        </AppContext.Provider>
      </header>
    </div>
  );
}

export default App;
