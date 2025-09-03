import React from "react";
import './../styles/App.css';
import TodoList from "./TodoList";
import { useState } from "react";

const App = () => {

   const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "Get a job", completed: false }
  ]);

   const handleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed:true } : todo))
   }


  return (
    <div>
         <h1>My Todo List</h1>
         <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  )
}

export default App
