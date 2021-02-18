import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

export default function Todo({task, completed}) {
    return (
        <ListItem>
            <Checkbox checked={completed} tabIndex={-1} />
            <ListItemText style={{ textDecoration: completed ? "line-through" : "none"}}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction><IconButton aria-label="delete"><DeleteIcon/></IconButton><IconButton aria-label="edit"><EditIcon/></IconButton></ListItemSecondaryAction>
        </ListItem>
    )
}