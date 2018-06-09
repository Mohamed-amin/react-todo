import React, { Component } from 'react';
import './styles.css';

class TodosList extends Component {
  render() {
    return (
      <ul class="todo-list">
        <li class="todo">
          <input type="checkbox" class="todo_check" />
          <span>Todo 1 </span>
          <div class="todo_actions">
            <a href="#" class="remove">remove</a>
          </div>
        </li>
        <li class="todo">
          <input type="checkbox" class="todo_check" />
          <span>Todo 1 </span>
          <div class="todo_actions">
            <a href="#" class="remove">remove</a>
          </div>
        </li>
        <li class="todo">
          <input type="checkbox" class="todo_check" />
          <span>Todo 1 </span>
          <div class="todo_actions">
            <a href="#" class="remove">remove</a>
          </div>
        </li>

        <li class="todo">
          <input type="checkbox" class="todo_check" />
          <span>Todo 1 </span>
          <div class="todo_actions">
            <a href="#" class="remove">remove</a>
          </div>
        </li>

      </ul>
    );
  }
}

export default TodosList;
