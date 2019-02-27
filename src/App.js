import React, { Component } from 'react';
import Navbar from './Navbar'
import Header from './Header'
import AddForm from './AddForm'
import Footer from './Footer'
import List from './List'
import BackEnd from './todoBackEnd'
import low from 'lowdb'
import localStorage from 'lowdb/adapters/LocalStorage'


var adapter = new localStorage('todoList');
var db = low(adapter);
db.defaults({ todos: [] }).write();
var dbInstance = new BackEnd.Todo(db);

class App extends Component {
  state = {
    todos: [] //Initialize the state
  }

  constructor(props) {
    super();
  
    this.state = {
      todos: dbInstance.getTodo()
    }
  }

  updateState = () => {
    this.setState({
      todos: dbInstance.getTodo()
    })
  }
  
  addTodo = (taskName) => {
    if( taskName === '') {
      return //Don't add empty todo items!
    }  
    
    dbInstance.newTodo(taskName);
    this.updateState();
  }

  toggleComplete = (taskID, complete) => {
    dbInstance.toggleComplete(taskID, complete);
    this.updateState();
  }
  
  removeTodo = (taskID) => {
    dbInstance.removeTodo(taskID);
    this.updateState();
  }
  
  clearAll = () => {
    dbInstance.removeAll();
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