import React from 'react';
import './Todo.css';
import { List,Avatar,ListItemAvatar, listItem,ListItemText, ImageIcon } from '@mui/material'

function Todo(props) {
    return (
        
        <List className="todo__list">
            <listItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Dummy deadline " />
            </listItem>
        </List>
       
    )
}

export default Todo