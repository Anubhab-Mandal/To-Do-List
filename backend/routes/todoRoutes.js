const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoControllers')

router
    .route('/')
    .get(todoController.getAllTodos)
    .post(todoController.createTodo);

router.route('/:id')
    .get(todoController.getTodo)
    .put(todoController.updateTodo)
    .delete(todoController.deleteTodo);

router.route('/:id/toggle').patch(todoController.toggleTodo)

module.exports = router;