const express = require('express');
const Task = require('../models/task.js');

const controller = {};

controller.addTask = async (req, res, next) => {
    const { data } = req.body;
    const task = await Task.create({
        task : data
    })
    res.locals.newTask = task;
    return next();

}

controller.getTasks = async (req, res, next) => {
    const allTasks = await Task.find({})
    res.locals.allTasks = allTasks;
    return next();
}

controller.deleteTask = async (req, res, next) => {
    const { taskId  } = req.params
    const deletedTask = await Task.findOneAndDelete({_id: taskId})
    console.log('deletedTask -->', deletedTask)
}

controller.updateTask = async (req, res, next) => {
    const { taskId  } = req.params
    //use req body
    // const updatedTask = await Task.findOneAndUpdate({_id: taskId})
    console.log('updatedTask -->', taskId, req.body, req.params)
}

module.exports = controller;