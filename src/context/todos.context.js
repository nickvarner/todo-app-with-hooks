import React from 'react'
import todoReducer from '../reducers/todo.reducer'
// import useTodoState from '../Hooks/useTodoState'
const defaultTodos = [
    {id: 1, task: "Eat", completed: true},
    {id: 2, task: "sleep", completed: false}
]
export const TodosContext = React.createContext()

export function TodosProvider(props) {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
    // const todoStuff = useTodoState(initialTodos);
    const [todos, dispatch] = React.useReducer(todoReducer, defaultTodos)
    return (
        <TodosContext.Provider value={{todos, dispatch}}>
            {props.children}
        </TodosContext.Provider>
    )
}