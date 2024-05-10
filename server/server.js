const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const taskRouter = require('./routes/task.js');
const userRouter = require('./routes/user.js');



mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('Connected to Database');
})

app.use(express.json())
app.use(express.static(path.join(__dirname, '../client')))
app.use('/api', taskRouter);
app.use('/api/auth', userRouter);





app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}.`)
})