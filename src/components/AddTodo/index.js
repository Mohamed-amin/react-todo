import React, { Component } from 'react';
import './styles.css';

class AddTodo extends Component {
  render() {
    return (
      <div className="add-todo">
        <input type="input" class="add-todo_input"/>
        <button class="add-todo_submit">add</button>
      </div>
    );
  }
}

export default AddTodo;
