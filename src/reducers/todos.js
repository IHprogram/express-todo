import { FETCH_TODOS, CREATE_TODO, DELETE_TODO } from '../actions/todos.js';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      state = [];
      // MongoDB Atlasから取得したデータをstoreのstateに格納
      return [...state, ...action.todos]
    case CREATE_TODO:
      // MongoDB Atlasに格納した値をstoreのstateにも格納
      return [...state, action.todo]
    case DELETE_TODO:
      console.log(action)
    default:
      return state;
  }
}