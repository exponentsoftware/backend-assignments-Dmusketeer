const express = require('express');
const bodyParser = require('body-parser');
const toDo = require('../models/todoDetailsModel')


module.exports.getAllTodo = (req, res) => {
    toDo.find()
        .then((todos) => {
            res.status(200).json(todos)
        })
        .catch((e) => {
            res.status(404).json({ message: e.message });
        })
}


module.exports.getTodoById = (req, res) => {
    let id = req.params.id;
    toDo.findById(id).then((todo) => {
        res.json(todo)
    }).catch((err) => {
        res.status(404).json({ message: err.message })
    })

}

module.exports.addTodoItem = (req, res) => {
    const { userName, title, taskStatus, createTime, updatedTime, category } = req.body;
    if (!userName || !title || !taskStatus || !category) {
        return res.status(404).json({ message: 'Enter all the fields' })
    }
    // instance of models
    const todo = new toDo({
        userName: userName,
        title: title,
        taskStatus: taskStatus,
        category: category
    })
    todo.save()
        .then((todos) => {
            return res.status(201).json({ message: "details saved successfully" });
        })
        .catch((err) => {
            return res.status(404).json({ message: err.message });
        })
}



module.exports.updateTodoById = (req, res) => {
    let id = req.params.id;
    toDo.findByIdAndUpdate(id, req.body).then((todo) => {
        res.status(201).json({ message: 'updated successfully' })
    }).catch((err) => {
        res.status(404).json({ message: err.message })
    })

}


module.exports.deleteTodoById = (req, res) => {
    let id = req.params.id;
    toDo.findByIdAndDelete(id).then((todo) => {
        res.status(201).json({ message: "deleted successfully!!" })
    }).catch((err) => {
        res.status(404).json({ message: err.message })
    })

}


