export const FETCH_TODOS = "FETCH_TODOS";
export const CREATE_TODO = "CREATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const fetchTodos = (todos) => {
  return (
    {
      type: FETCH_TODOS,
      todos
    }
  )
}

export const createTodo = (todo) => {
  return (
    {
      type: CREATE_TODO,
      todo
    }
  )
}

export const deleteStateTodo = (id) => {
  return (
    {
      type: DELETE_TODO,
      id
    }
  )
}