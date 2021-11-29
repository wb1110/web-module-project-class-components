//hold your input field and your `Add Todo` and `Clear Completed` buttons.
import React, { useState } from 'react';

class Form extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <form onSubmit={this.props.submit}>
            <input type="text" onChange={this.props.change}></input>
            <input type="submit" value="Add Todo"/>
            <button>Clear Completed</button>
          </form>
        );
      }
    
}

export default Form;