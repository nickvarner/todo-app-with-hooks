import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import "./Styles/TodoStyles.css"
import useToggleState from './Hooks/useToggleState'
import EditTodoForm from './EditTodoForm'
import {TodosContext} from './context/todos.context'

export default function Todo({ task, completed, id }) {
    const {removeTodo, toggleTodo} = React.useContext(TodosContext)
    const [isEditing, toggle] = useToggleState(false)
    return (
        
        <ListItem className="todo-ListItem">
            {isEditing ? <EditTodoForm id={id} task={task} toggleEdit={toggle} /> : 
                <>
                    <Checkbox checked={completed} tabIndex={-1} onClick={() => toggleTodo(id)} />
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none"}}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction><IconButton aria-label="delete" onClick={() => removeTodo(id)}><DeleteIcon/></IconButton><IconButton aria-label="edit" onClick={toggle}><EditIcon/></IconButton></ListItemSecondaryAction>
                </>
        }
        </ListItem>
        
    )
}
