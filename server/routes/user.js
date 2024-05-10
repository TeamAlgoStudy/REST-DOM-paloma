const express = require('express');
const userController = require('../controller/userController.js');
const router = express.Router();


router.post('/signup', userController.addUser, (req, res) => {
    return res.status(200).json(res.locals.newUser)
})

router.post('/login', userController.verifyUser, (req, res) => {
    console.log('hello from post login')
    // return res.status(200).json(res.locals.newUser)
})
module.exports = router;