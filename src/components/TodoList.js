import React from 'react'
import { useState } from 'react'
const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
        {todos.map(todo => (
        <div key={todo.id} style={{ 
          padding: "10px", 
          margin: "5px", 
          border: "1px solid #ccc",
        }}>
          {todo.text}
          
          {!todo.completed && (
            <button 
              onClick={() => handleComplete(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              Complete
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default TodoList