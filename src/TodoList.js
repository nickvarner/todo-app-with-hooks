import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Todo from './Todo'
import {TodosContext} from './context/todos.context'

export default function TodoList() {
    const {todos} = React.useContext(TodosContext)
    if (todos.length)
    return (
        <Paper>
            <List>
                {todos.map((todo, i) =>(
                    <React.Fragment >
                        <Todo 
                            {...todo}
                            key={todo.id}
                        />
                        {i < todos.length - 1 && <Divider/> }
                    </ React.Fragment>
                ))}
            </List>
        </Paper>
    );
    return null;
}
