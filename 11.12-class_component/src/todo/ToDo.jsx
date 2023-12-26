import React, { Component } from 'react'
import './todo.css'


export default class ToDo extends Component {

    constructor(props){
        super(props);
        this.state = {
            todos :[
                { id:1, name: "CSS", completed: true },
                { id:2,name: "JavaScript", completed: true },
                { id:3,name: "Learn React", completed: false },
                { id:4,name: "Learn mongoDB", completed: false },
                { id:5,name: "Learn Node JS", completed: false },
                ],
          
        }
    };
    handleToggleTodo = (index) => {
        const updatedTodos =  this.state.todos;
        updatedTodos[index].completed = !(updatedTodos[index].completed);
        this.setState({ todos: updatedTodos })


        // this.state.todos.map(todo => {
        //     if (todo.id === index) {
        //         todo.completed=completed;
        //   }})
        };
       
    
        //   const updatedTodos = [...prevState.todos];
        //   updatedTodos[index].completed = !updatedTodos[index].completed;
        // //   this.state.todos = updatedTodos;
        //   return { todos: updatedTodos };
        // });
  render() {
    console.log(this.state.todos)

  return (
    <div>
        <h1>Todo App</h1>
        <ul>
          {this.state.todos.map((todo,index) => (
            <div key={index} className={todo.completed ? 'completed' : ''}>
              {todo.name}
              <button onClick={() => this.handleToggleTodo(index)} className="toggle-btn">
              {todo.completed ? '✓' : '✗'}
              </button>
            </div>
          ))}
        </ul>
      </div>
      );
    }
  }
