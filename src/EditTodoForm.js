import React from 'react'
import TextField from '@material-ui/core/TextField'
import useInputState from "./Hooks/useInputState"
import "./Styles/EditTodoFormStyles.css"

export default function EditTodoForm(props) {
    const [value, handleChange, reset] = useInputState(props.task);
    return (
            <form onSubmit={(e) => {
                e.preventDefault();
                props.editTodo(props.id, value);
                reset();
                props.toggleEdit()
            }} className="editTodo-form">
                <TextField margin="normal" value={value} onChange={handleChange} fullWidth autoFocus/>
            </form>
    )
}
