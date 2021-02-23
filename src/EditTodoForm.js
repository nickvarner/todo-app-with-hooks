import React from 'react'
import TextField from '@material-ui/core/TextField'
import useInputState from "./Hooks/useInputState"
import "./Styles/EditTodoFormStyles.css"
import {DispatchContext} from './context/todos.context'

export default function EditTodoForm({id, task, toggleEdit}) {
    const dispatch = React.useContext(DispatchContext);
    const [value, handleChange, reset] = useInputState(task);
    console.log("edit todoform render")
    return (
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch({type: "EDIT", id: id, newTask: value});
                reset();
                toggleEdit()
            }} className="editTodo-form">
                <TextField margin="normal" value={value} onChange={handleChange} fullWidth autoFocus/>
            </form>
    )
}
