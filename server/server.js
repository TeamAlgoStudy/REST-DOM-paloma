const express = require('express');
const path = require('path')
const app = express();
const PORT = 3000;



app.use(express.static(path.join(__dirname, '../client')))
app.get('/hi', (req, res) => {
    return res.send('helloooo')
})

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}.`)
})