import React, { useState, useEffect } from 'react';
import TodoList from './ToDoList';
import "./toDo.css"

const ToDoApp = () => {
  const [todosArr, setTodosArr] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodosArr(storedTodos);
    }
  }, []);

  const addTask = () => {
    if (newTask !== '') {
      const updatedTodos = [
        ...todosArr,
        { id: Date.now(), task: newTask, completed: false },
      ];
      setTodosArr(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setNewTask('');
    }
  };

  const toggleTask = (taskId) => {
    const updatedTodos = todosArr.map((todo) =>
      todo.id === taskId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodosArr(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const deleteTask = (taskId) => {
    const updatedTodos = todosArr.filter((todo) => todo.id !== taskId);
    setTodosArr(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div>
      <h1>Todo's</h1>
      <h3>localStorage CRUD app</h3>
      <h4>CRUD- Create Read Update Delelte</h4>
      <div className='add-task'>
        <h4>Add Todo</h4>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <TodoList todos={todosArr} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
};

export default ToDoApp;
