import React from 'react'
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import './Styles/TodoApp.css'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import {TodosProvider} from './context/todos.context'

export default function TodoApp() {
    return (
        <Paper className="Paper" elevation={0}>
            <AppBar color="primary" position="static" className="AppBar">
                <Toolbar>
                    <Typography color="inherit">todos with hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" >
                <Grid item xs={11} md={8} lg={4} >
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>
                </Grid>
            </Grid>
        </Paper>
    )
}
