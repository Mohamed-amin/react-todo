import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodosList from './components/TodosList';
import AddTodo from './components/AddTodo';
class App extends Component {
  state = {
    todos : [
      { value: 'Todo 1 whats up!', status: true, ts: 1312312312},
      { value: 'Todo 1 whats up!', status: true, ts: 1312312314},
    ]
  }
  remove = (ts) => {
    const todos = this.state.todos.filter(t => t.ts !== ts)
    console.log(ts, todos)
    this.setState(() => ({ todos }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TO-DO App</h1>
        </header>
        <section className="App-content card">
          <AddTodo />
          <TodosList
            todos={this.state.todos}
            remove={this.remove}
          />
        </section>
      </div>
    );
  }
}

export default App;
