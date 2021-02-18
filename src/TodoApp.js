import React from 'react'
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import './Styles/TodoApp.css'
import TodoList from './TodoList'

export default function TodoApp() {
    const initialTodos =[
        {id: 1, task: "walk cat", completed: false},
        {id: 2, task: "play tennis", completed: true},
        {id: 3, task: "take a shower", completed: false}
    ]
    const [todos, setTodos] = React.useState(initialTodos)
    return (
        <Paper className="Paper" elevation={0}>
            <AppBar color="primary" position="static" className="AppBar">
                <Toolbar>
                    <Typography color="inherit">todos with hooks</Typography>
                </Toolbar>
            </AppBar>
            <TodoList todos={todos} />
        </Paper>
    )
}
