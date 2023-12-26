// TodoItem.js
import React from 'react';
import "./toDo.css"


const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span className="toggle-icon" onClick={() => onToggle(todo.id)}>
        {todo.completed ? '🗹' : '☐'}
      </span>

      {todo.task}     
    
      <button className ="delete-btn" onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
  );
};

export default TodoItem;
