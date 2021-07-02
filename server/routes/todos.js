import express from 'express';
import { getTodos, createTodo, deleteTodo } from '../controllers/todos.js';

const router = express.Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.delete('/:id', deleteTodo);

export default router;