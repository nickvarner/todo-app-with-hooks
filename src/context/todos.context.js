//todos
//all methods to interact w/ todos
import React from 'react'
import useTodoState from '../Hooks/useTodoState'

const defaultTodos = [
    { id: 1, task: "eat", completed: false},
    { id: 2, task: "sleep", completed: true}
]

export const TodosContext = React.createContext()

export function TodosProvider(props) {
    // const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
    const todoStuff = useTodoState(defaultTodos);
    return (
        <TodosContext.Provider value={todoStuff}>
            {props.children}
        </TodosContext.Provider>
    )
}