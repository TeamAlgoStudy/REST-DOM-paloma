const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user.js');


const controller = {};

controller.addUser = async (req, res, next) => {
    console.log('hello from controller user', req.body)
    const { username, password } = req.body;
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({username, password: hashedPassword});
        res.locals.newUser = newUser;
        return next();
    } catch {
        console.log('errorr')
    }
   
}


controller.verifyUser = async (req, res, next) => {
    console.log('verify user', req.body)
    const { username, password } = req.body;
    const user = await User.findOne({username})

    console.log('found user', user)
}


module.exports = controller;