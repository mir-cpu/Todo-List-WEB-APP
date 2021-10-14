import React from 'react';
import {List,ListItem,ListItemText,ListItemAvatar} from '@material-ui/core';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './todoStyling.css';



function Todo(props) {
    return (
        <List>
            <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
            <DeleteForeverIcon classname="del" onClick={event => {db.collection('todos').doc(props.todo.id).delete()} } >❌Delete Me</DeleteForeverIcon>
        
            <ListItemText className="text" primary={props.todo.task} secondary="Time Limit⏰" />
            </ListItem>
        </List>
    )
}

export default Todo
