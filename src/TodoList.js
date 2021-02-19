import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Todo from './Todo'

export default function TodoList(props) {
    const {todos, removeTodo, toggleTodo, editTodo} = props;
    return (
        <Paper>
            <List>
                {todos.map((todo, i) =>(
                    <>
                        <Todo 
                            task={todo.task}
                            key={todo.id}
                            completed={todo.completed}
                            removeTodo={removeTodo}
                            id={todo.id}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo} 
                        />
                        {i < todos.length - 1 && <Divider/> }
                    </>
                ))}
            </List>
        </Paper>
    )
}
