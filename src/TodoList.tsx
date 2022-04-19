import { useContext, useEffect, useState } from "react";
import AppContext, { Todo } from "./AppContext";
import Button from "./Button";


export function TodoListItem(todo: Todo): JSX.Element {
  useEffect(() => { console.log(`Executing TodoListItem '${todo.text}' function`) });
  useEffect(() => { console.log(`Mounting TodoListItem '${todo.text}'`) }, [todo]);
  const { removeTodo } = useContext(AppContext);
  const [todoText, setTodoText] = useState(todo.text);

  // useEffect(() => {
  //   setTimeout(function() {
  //     setTodoText((todoText) => todoText + '!');
  //     console.log('Updating todo');
  //   }, 5_000);
  //  }, []);

  return (
    <>
      <span>{todoText}</span>
      <Button onClick={() => removeTodo(todo)}>Done</Button>
    </>
  );
}


function TodoList(): JSX.Element {
  useEffect(() => { console.log('Executing TodoList function') });
  useEffect(() => { console.log('Mounting TodoList') }, []);

  const { todos } = useContext(AppContext);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <TodoListItem {...todo}/>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
