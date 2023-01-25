import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

const Todo = ({ todo }) => {
    
    const date = new Date();
    
    return (
        <List>
            <ListItem>
                <ListItemText primary={todo} secondary="dummy deadline⏰" />
                {/* <li>{todo}</li> */}

            </ListItem>
        </List>
    )
}

export default Todo