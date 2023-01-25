import { Button, FormControl, Input, InputLabel } from "@mui/material";
import React, { useState } from "react";
import './App.css'
import Todo from "./Todo";

function App() {
  const [todo, setTodo] = useState(["Take dog for a walk", "Complete Homework"])
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();      // will stop the refresh
    setTodo([...todo, input]);
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
        {todo.map((todo) => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
