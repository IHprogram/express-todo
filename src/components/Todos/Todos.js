import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchTodos, deleteStateTodo } from '../../actions/todos.js';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();
  const todosState = useSelector(state => state.Todos);

  useEffect(() => {
    axios.get('http://localhost:3001/todos')
      .then(res => {
        const newTodos = res.data;
        dispatch(fetchTodos(newTodos));
      })
  }, []);

  useEffect(() => {
    setTodos(todosState);
  }, [todosState])

  const deleteStateTodo = (e, id) => {
    // e.preventDefault();
    console.log(id);
    axios.delete(`http://localhost:3001/todos/${id}`);
  }

  return (
    <div>
      <h1>Todoリスト</h1>
      <ul>
        {todos.map((element) => {
          return (
            <li key={element._id}>
              <span>{element.todo}</span>
              <Button color="secondary" onClick={(e) => deleteStateTodo(e, element._id)}>削除</Button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Todos;