import { Button, List, ListItem, ListItemText, Modal, Typography } from '@mui/material'
import { doc, deleteDoc, setDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import db from './firebase';
import { Box } from '@mui/system';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Todo = ({ todo }) => {

    const [open, setOpen] = useState(false)
    const [input, setInput] = useState('');

    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const updateTodo = (e) => {
        e.preventDefault();
        
        setDoc(doc(db, 'todos', todo.id), {
            todo: input
        }, { merge: true });
        setOpen(false);
    }
    const dltTodo = () => {
        deleteDoc(doc(db, 'todos', todo.id));
    }
    
    return (
        <List>
            <ListItem>
                <ListItemText primary={todo.todo} secondary="dummy deadline⏰" />
            </ListItem>
            <Button onClick={handleOpen}>Edit</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form>

                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <input value={input} placeholder={todo.todo} onChange={event => setInput(event.target.value)} />
                        <Button type='submit' onClick={updateTodo}>Update Todo</Button>
                    </Box>
                </form>

            </Modal>
            <Button>
                <DeleteIcon onClick={dltTodo} />
            </Button>
        </List>
    )
}

export default Todo