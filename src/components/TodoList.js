// receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.
import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {

    
    return (
        <div>
        {console.log(props)}
        {/* {props.task.map(todo => {
            <Todo key={todo.id} todo={todo} />
        })} */}
        </div>
    );
}
    

export default TodoList;