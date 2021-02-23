import React from 'react'
import todoReducer from '../reducers/todo.reducer'
// import useTodoState from '../Hooks/useTodoState'
const defaultTodos = [
    {id: 1, task: "Eat", completed: true},
    {id: 2, task: "sleep", completed: false}
]
export const TodosContext = React.createContext();
export const DispatchContext = React.createContext();

export function TodosProvider(props) {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
    // const todoStuff = useTodoState(initialTodos);
    const [todos, dispatch] = React.useReducer(todoReducer, defaultTodos)
    return (
        //for splitting into 2 different contexts you no longer need to place them in an object, bc that will create a new object thus rerendering
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}