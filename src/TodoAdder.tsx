import * as React from "react";
import { useContext, useEffect, useState } from "react";
import AppContext from "./AppContext";
import Button from "./Button";

export default function ItemAdder() {
  useEffect(() => { console.log('Executing ItemAdder function') });
  useEffect(() => { console.log('Mounting ItemAdder') }, []);

  const [input, setInput] = useState('');

  const { addTodo } = useContext(AppContext);

  const onClick = () => {
    if (input === '') {
      return;
    }
    addTodo(input);
    setInput('');
  }

  return (
    <>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <Button onClick={() => onClick()}>Add item</Button>
    </>
  )
}