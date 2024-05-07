const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController.js')

router.post('/addTask', taskController.addTask, (req, res) => {
    return res.status(200).json(res.locals.newTask)
})



module.exports = router;