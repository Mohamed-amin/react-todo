import React, { Component } from 'react';
import './styles.css';

class AddTodo extends Component {
  state = {
    todoValue: ''
  }
  onChange = (e) => {
    const { value } = e.target;
    this.setState(() => {
      return { todoValue: value }
    })
  }
  onAdd = () => {
    this.props.add(this.state.todoValue);
    this.setState(() => {
      return { todoValue: '' }
    })
  }
  render() {
    return (
      <div className="add-todo">
        <input type="input" value={this.state.todoValue} className="add-todo_input" onChange={this.onChange} autoFocus={true}/>
        <button className="add-todo_submit" onClick={this.onAdd} >add</button>
      </div>
    );
  }
}

export default AddTodo;
