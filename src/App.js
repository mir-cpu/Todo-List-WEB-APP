// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import Todo from "./Todo.js";
import { Button , FormControl , Input , InputLabel  } from '@material-ui/core';
import db from "./firebase";
import firebase from "firebase";
import './App.css';


function App() {
  const [todos, setTodos]= useState([]);
 const [input , setInput]=useState('');
//when the app.js loads we need to get the todos from our database 
 useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id,task:doc.data().task})));
      console.log();
    })
 },[])

 const addTodo=(e) => {
   e.preventDefault();
   db.collection('todos').add({
     task:input,
     timestamp: firebase.firestore.FieldValue.serverTimestamp()
   })
   setInput('');
   
 }
  return (
   
    <div className="App">
      <h1>Todo-App</h1>
      
      <form className="fin">
        <FormControl>
          <InputLabel>✅:Write a todo</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />
        </FormControl>
        <Button type="submit" disabled={!input}variant="contained" color="primary"onClick={addTodo}>
          Add Todo
        </Button>
      </form>
    
      <ul className='text'>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
        
      </ul>
      
    </div>
  );
}

export default App;
