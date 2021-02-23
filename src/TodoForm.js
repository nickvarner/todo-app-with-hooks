import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import useInputState from "./Hooks/useInputState"
import {TodosContext} from './context/todos.context'

export default function TodoForm(props) {
    const [value, handleChange, reset] = useInputState("");
    const {dispatch} = React.useContext(TodosContext)
    console.log("todoform render")
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch({type: "ADD", task: value});
                reset();
            }} >
            <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
                <TextField onChange={handleChange} value={value} margin="normal" label="add new todo" fullWidth />
            </Paper>
            </form>
        </div>
    )
}
