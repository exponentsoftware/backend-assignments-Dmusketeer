const express = require('express');
//Use the express.Router class to create modular, mountable route handlers.
const router = express.Router();
const todoDetailsController = require('../controllers/todoDetailsController')

// endpoints to perform diffrent operations:
router.get('/alltodo', todoDetailsController.getAllTodo)
router.get('/:id', todoDetailsController.getTodoById)
router.post('/addtodo', todoDetailsController.addTodoItem)
router.patch('/:id', todoDetailsController.updateTodoById)
router.delete('/:id', todoDetailsController.deleteTodoById)

// export router
module.exports = router;