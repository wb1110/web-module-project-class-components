//takes in the `todo` data and displays the task to the screen.
import React from 'react';

const Todo = (props) => {
    return (
        <div>
            <p>{props.todo.task}</p>
        </div>
    );
}
    

export default Todo;