// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import "./toDo.css"

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className='list'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
