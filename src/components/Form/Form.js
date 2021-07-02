import React, { useState } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { createTodo } from '../../actions/todos.js';

function Form() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);

    axios.post('http://localhost:3001/todos', { todo: todo })
      .then(res => {
        console.log(res);
        const newTodo = res.data;
        setTodo('');
        dispatch(createTodo(newTodo));
      })
  }

  return (
    <div>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">
          投稿フォーム
        </Typography>
        <TextField type='text' name="todo" variant="outlined" label="Todo" fullWidth value={todo} onChange={(e) => setTodo(e.target.value)} />

        <Button type="submit" color="primary" variant="outlined">送信</Button>
      </form>
    </div>
  )
}

export default Form