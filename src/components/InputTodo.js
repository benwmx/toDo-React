/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class InputTodo extends React.Component {
  state = {
    title: ' ',
  };

  onChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todo ..." value={this.state.title} onChange={(event) => this.onChange(event)} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
