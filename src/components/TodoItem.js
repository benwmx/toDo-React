/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.todo.completed} onChange={() => this.props.handleChangeProps(this.props.todo.id)} />
        <button type="button" onClick={() => this.props.delTodoProps(this.props.todo.id)}> Delete</button>
        { this.props.todo.title }
      </li>
    );
  }
}
