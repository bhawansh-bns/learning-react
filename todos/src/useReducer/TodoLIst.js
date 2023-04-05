import React from "react";
import { TODOS_ACTIONS } from "./todos";


const TodoList = ({todos, dispatch}) =>{
    return (
        <>
         <hr />
            {todos.map(todo =><li key={todo.id}>
                {todo.name}
                <span> 
                    <button onClick={() => dispatch(
                        {type: TODOS_ACTIONS.DELETE_TASK , payload: todo.id}
                        )}> 
                        DELETE
                    </button>
                </span>
                </li>)}
                <hr/>
        </>
    )
}

export default TodoList;