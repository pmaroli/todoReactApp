import React, { Component } from 'react';
import Navbar from './Navbar'
import Header from './Header'
import AddForm from './AddForm'
import Footer from './Footer'
import List from './List'


class App extends Component {
  state = {
    todos: [] //Initialize the state
  }

  componentDidMount() { //Initialize the localStorage component
    if (localStorage.getItem('todoList')) {
      this.updateState();
    } else {
      localStorage.setItem('todoList', JSON.stringify([])); //Initialize localStorage with an empty array
    }
  }
  
  addTodo = (todo) => {
    if( todo.taskName === '') {
      return //Don't add empty todo items!
    }
    
    todo.id = Math.random(); //Set a random number as the ID (a unique indentifier)
    todo.complete = false;
    
    //Add the todo object to an array of todo objects in the localStorage
    //If the 'todoList' item in localStorage doesn't exist, create it
    if (localStorage.getItem('todoList')) {
      var todoList = JSON.parse(localStorage.getItem('todoList'));
      todoList.push(todo);
      localStorage.setItem('todoList', JSON.stringify(todoList));
      this.updateState();
    } else {
      todoList = [];
      todoList.push(todo);
      localStorage.setItem('todoList', JSON.stringify(todoList));
    }
  }

  toggleComplete = (id) => {
    var todoList = JSON.parse(localStorage.getItem('todoList'));

    for (var i = 0; i < todoList.length; i++) {
      if ( todoList[i].id === id ) {
        todoList[i].complete = (!todoList[i].complete); /* Toggles the complete status of the task */
      }
    }

    //Update the local storage appropriately
    localStorage.setItem('todoList', JSON.stringify(todoList));
    this.updateState();
  }
  
  updateState = () => {
    this.setState({
      todos: JSON.parse(localStorage.getItem('todoList'))
    });
  }
  
  removeTodo = (id) => {
    var todoList = JSON.parse(localStorage.getItem('todoList'));
    const newTodos = todoList.filter(todo => {
      return todo.id !== id
    })
    localStorage.setItem('todoList', JSON.stringify(newTodos));
    this.updateState();
  }
  
  clearAll = () => {
    localStorage.setItem('todoList', JSON.stringify([]));
    this.updateState();
  }
  
  
  
  render() {
    return (
      <div className="App">
        <Navbar clearAll={this.clearAll}/>
        <Header />
        <AddForm addTodo={this.addTodo}/>
        <List todos={this.state.todos} removeTodo={this.removeTodo} toggleComplete={this.toggleComplete}/>
        <Footer />
      </div>
      
      );
    }
  }
  
  export default App;