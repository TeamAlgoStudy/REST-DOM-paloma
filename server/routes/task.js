const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController.js')

router.post('/addTask', taskController.addTask, (req, res) => {
    return res.status(200).json(res.locals.newTask)
})

router.get('/getTask', taskController.getTasks, (req, res) => {
    return res.status(200).json(res.locals.allTasks)
})

router.delete('/deleteTask/:taskId', taskController.deleteTask, (req, res) => {
    return res.status(200).json(res.locals.deletedTask)
})

router.put('/updateTask/:taskId', taskController.updateTask, (req, res) => {
    return res.status(200).json(res.locals.updatedTask)
})

module.exports = router;