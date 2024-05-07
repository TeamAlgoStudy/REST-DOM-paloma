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

module.exports = controller;