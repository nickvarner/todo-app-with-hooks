import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import useInputState from "./Hooks/useInputState"

export default function TodoForm(props) {
    const [value, handleChange, rest] = useInputState("");
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                props.addTodo(value);
                rest();
            }} >
            <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
                <TextField onChange={handleChange} value={value} margin="normal" label="add new todo" fullWidth />
            </Paper>
            </form>
        </div>
    )
}
