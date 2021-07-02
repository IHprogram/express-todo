import Todo from '../models/todos.js';

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    console.log(todos);
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
}

export const createTodo = async (req, res) => {
  const todo = req.body.todo;
  console.log(todo)
  const newTodo = new Todo({ todo: todo });
  try {
    await newTodo.save().then(() => {
      console.log(newTodo)
      res.status(201).json(newTodo);
    })
  } catch (error) {
    console.log(error);
  }
}

export const deleteTodo = async (req, res) => {
  const id = req.params.id
  console.log('IDです', typeof id);
  try {
    console.log('tyrです')
    // MongoDBから、「_id」が一致するものを削除する。
    await Todo.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
  }
}
