import React, { Component } from 'react';
import logo from './logo.svg';
import 'typeface-roboto'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TO-DO App</h1>
        </header>
        <section>
          <textarea></textarea>
          <button>add</button>
        </section>
        <section>
          <ul>
            <li>
              <input type="checkbox" />
              <span>Todo 1 </span>
              <div>
                <a class="remove">remove</a>
              </div>
            </li>
            <li> Todo 2</li>
            <li> Todo 3</li>
            <li> Todo 4</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
