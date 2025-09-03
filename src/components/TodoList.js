import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <>
      {todos.map(todo => (
        <li key={todo.id} style={{ 
          padding: "10px", 
          margin: "5px", 
          border: "1px solid #ccc",
          listStyle: "none"  // Remove bullet points
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
        </li>
      ))}
    </>
  );
}

export default TodoList;
