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
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({ title: '' });
    } else {
      alert('Please write an item');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input type="text" className="input-text" placeholder="Add Todo ..." value={this.state.title} onChange={(event) => this.onChange(event)} />
        <button type="submit" className="input-submit">Submit</button>
      </form>
    );
  }
}
