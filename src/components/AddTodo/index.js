import React, { Component } from 'react';
import './styles.css';

class AddTodo extends Component {
  render() {
    return (
      <div className="add-todo">
        <input type="input" className="add-todo_input"/>
        <button className="add-todo_submit">add</button>
      </div>
    );
  }
}

export default AddTodo;
