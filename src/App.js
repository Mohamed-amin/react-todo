import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodosList from './components/TodosList';
import AddTodo from './components/AddTodo';
class App extends Component {
  state = {
    todos : []
  }
  remove = (ts) => {
    const todos = this.state.todos.filter(t => t.ts !== ts)
    this.setState(() => ({ todos }));
  }
  add = (todo) => {
    console.log({value: todo, ts: Date.now(), status: false })
    this.setState( ()=> {
        return { todos: [...this.state.todos, {value: todo, ts: Date.now(), status: false }]}
      }
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TO-DO App</h1>
        </header>
        <section className="App-content card">
          <AddTodo add={this.add} />
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
