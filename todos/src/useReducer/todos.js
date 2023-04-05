import React, {useReducer} from "react";
import TodoList from "./TodoLIst";

const initialState = [];

export const TODOS_ACTIONS = {
    ADD_TASK: 'add_task',
    DELETE_TASK: 'delete_task',
    RESET_TASK: 'reset_task'
}

function reducer(state, action){
    switch(action.type){
        case TODOS_ACTIONS.ADD_TASK : return [
            ...state,
            {
                id: state.length+1,
                name: action.payload
            }
        ];

        case TODOS_ACTIONS.DELETE_TASK : return state.filter(d => d.id !== action.payload);
        
        case TODOS_ACTIONS.RESET_TASK: return init(action.payload);

        default : return state;
    }

}

function init(initialState){
    //somelogic to generate the initial state
    return initialState;
}
const Todos = () => {

    const [todos, dispatch] = useReducer(reducer, initialState, init);

    return(
        <>
        <h1>Todo List {todos.length}</h1>
        Add New Task:
        <input type="text" onBlur={(e) => dispatch(
            {type: TODOS_ACTIONS.ADD_TASK, payload: e.target.value}
            )} />
        <button onClick={() => dispatch(
                    { type: TODOS_ACTIONS.RESET_TASK, payload: initialState}
                    )}>
                        RESET
        </button>
        <TodoList todos={todos} dispatch={dispatch}/>
        </>
    )
}

export default Todos;