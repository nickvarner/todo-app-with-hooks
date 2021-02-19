import React from 'react'
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import { v4 as uuidv4 } from 'uuid';
import './Styles/TodoApp.css'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

export default function TodoApp() {
    const initialTodos =[
        {id: 1, task: "walk cat", completed: false},
        {id: 2, task: "play tennis", completed: true},
        {id: 3, task: "take a shower", completed: false}
    ]
    const [todos, setTodos] = React.useState(initialTodos)
    const addTodo = (newTodoText) => {
        setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}])
    }
    const removeTodo = (todoId) => {
        const newTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(newTodos);
    }
    const toggleTodo = (todoId) => {
        const updatedTodos = todos.map(todo => 
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo)
        setTodos(updatedTodos)
    }
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo => 
            todo.id === todoId ? {...todo, task: newTask} : todo
            );
            setTodos(updatedTodos)
    }
    return (
        <Paper className="Paper" elevation={0}>
            <AppBar color="primary" position="static" className="AppBar">
                <Toolbar>
                    <Typography color="inherit">todos with hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" >
                <Grid item xs={11} md={8} lg={4} >
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                </Grid>
            </Grid>
        </Paper>
    )
}
