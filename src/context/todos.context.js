//todos
//all methods to interact w/ todos
import React from 'react'
import useTodoState from '../Hooks/useTodoState'

export const TodosContext = React.createContext()

export function TodosProvider(props) {
    const {todos, addTodo, removeTodo, editTodo, toggleTodo} = useTodoState();
    return (
        <TodosContext.Provider value={{}}>
            {props.children}
        </TodosContext.Provider>
    )
}