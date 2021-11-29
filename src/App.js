import React, { useState } from 'react';
import Form from './components/TodoForm';
import TodoList from './components/TodoList'

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      todo: todo

    };

  }

  handleChange = (e) => {
    this.setState({task: e.target.value});
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      task: this.state.task,
      id: 1,
      completed: false
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo}/>
        <Form change={this.handleChange} submit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
