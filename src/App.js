import { Button, FormControl, Input, InputLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import './App.css'
import Todo from "./Todo";
import db from './firebase';
import { collection, orderBy, addDoc, getDocs, Timestamp, onSnapshot, query, setDoc } from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('');

  // when the app loads we need to listen to the database and fetch  new todos as they added/removed  

  useEffect(() => {
    const getData = async () => {
      const colRef = query(collection(db, 'todos'), orderBy('timestamp', 'desc'))
      onSnapshot(colRef, (snapshot) => {
        setTodos(snapshot.docs.map(doc => ({
          id: doc.id,
          todo: doc.data().todo
        })
        ))
      })
    }
    
    getData()
  }, [])


  const addTodo = (e) => {
    e.preventDefault();      // will stop the refresh
    addDoc(collection(db, "todos"), {
      todo: input,
      timestamp: Timestamp.now()
    });

    setInput('');          // clear the input back to null after adding task to todo list
  }

  return (
    <div className="App">
      <h1>Let's Make up Your day!🚀</h1>
      <div className="task">
        {/* Adding form and button type submit is helping us to add in todo by pressing on enter key */}
        <form>
          <FormControl>
            <InputLabel >Write a task</InputLabel>
            <Input type="text" value={input} className="taskInput" onChange={(e) => setInput(e.target.value)} />
          </FormControl>
          <Button disabled={!input} type="submit" variant="contained" onClick={addTodo}>Add Task</Button>

        </form>
      </div>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
