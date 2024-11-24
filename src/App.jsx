import { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Go to bed",
      isCompleted: false,
    },{
      text: "Book brunch",
      isCompleted: false,
    },{
      text: "Puppy time",
      isCompleted: false,
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  } 

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1 className="todo-list">Lucie's To-do list</h1>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} index={index} completeTodo={completeTodo} />
      ))}
      <TodoForm className="todo-form" addTodo = {addTodo} />
    </div>
  );
}

export default App;
