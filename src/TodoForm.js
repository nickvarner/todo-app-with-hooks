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
            <Paper>
                <TextField onChange={handleChange} value={value}/>
            </Paper>
            </form>
        </div>
    )
}
