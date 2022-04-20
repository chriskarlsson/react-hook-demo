import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import AppContext from './AppContext';
import ClickCounterDisplay from './ClickCounterDisplay';
import TodoAdder from './TodoAdder';
import TodoList from './TodoList';
import useAppContext from './AppHook';

function App() {
  useEffect(() => { console.log('Executing App function') });
  useEffect(() => { console.log('Mounting App') }, []);

  const context = useAppContext();

  const [direction, setDirection] = useState('right');
  const toggleDirection = () => {
    setDirection((direction) => direction === 'right' ? 'left' : 'right');
  }
  const logoClasses = `App-logo spin-${direction}`;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={logoClasses} alt="logo" />
        <Button onClick={toggleDirection}>Change direction</Button>
        <p/>
        <AppContext.Provider value={context}>
          <TodoAdder />
          <TodoList />
          <ClickCounterDisplay />
          <Button onClick={context.incrementClickCounter}>Increment</Button>
        </AppContext.Provider>
      </header>
    </div>
  );
}

export default App;
