const express = require('express');
const dotenv = require('dotenv')
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const apiRouter = require('./routes/api.js');

dotenv.config({ path: './.env' });


mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('Connected to Database');
})

app.use(express.json())
app.use(express.static(path.join(__dirname, '../client')))
app.use('/api', apiRouter);





app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}.`)
})