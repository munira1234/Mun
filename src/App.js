import React, { useState , useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl,Input, InputLabel } from '@mui/material'
import './App.css';
import db from './firebase';


function App() {
 
  const [todos, setTodos] =  useState(['abc','def']);
  const [input ,setInput] = useState('');

  useEffect(() => {

  db.collection('todos').onSnapshot(snapshot => {
  console.log(snapshot.docs.map(doc => doc.data()));

  setTodos(snapshot.docs.map(doc => doc.data().todo))
})

}, []);
  const addTodo = (event) => {
    //this will fire off 
    event.preventDefault();
    console.log ('200','Im working!!');
    setTodos([...todos,input]);
    setInput('');
    console.log(todos);
  }
   return(
    <div className="App">
<h1> Hello Clever Programmers!</h1>

<form>
  <FormControl>
    <InputLabel>Write a Todo </InputLabel>
    <Input  value={input} onChange={event => setInput(event.target.value)}/> 
  </FormControl>

<Button disabled={!input} type="submit"onClick  ={addTodo} variant ="contained" color="primary"> App Todo</Button>
{/*<button type="submit"onClick ={addTodo}> App Todo</button>*/}
</form>


<ul>
  {todos.map(todo => (
    < Todo text={todo}/>

 //<li {todo}</li>
  ))}
</ul>
    </div>
  );
}
export default App