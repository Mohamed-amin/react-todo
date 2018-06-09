import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodosList from './components/TodosList';
import AddTodo from './components/AddTodo';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TO-DO App</h1>
        </header>
        <section class="App-content card">
          <AddTodo />
          <TodosList />
        </section>
      </div>
    );
  }
}

export default App;
