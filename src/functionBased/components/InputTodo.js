/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({ title: '' });

  const onChange = (event) => {
    setInputText({
      ...inputText,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({ title: '' });
    } else {
      alert('Please write an item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text" name="title" className="input-text" placeholder="Add Todo ..." value={inputText.title} onChange={onChange} />
      <button type="submit" className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;
