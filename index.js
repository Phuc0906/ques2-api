const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/process', async (req, res) => {
    const input = req.query.input;
    res.send(input.replace(/\s/g, ' '))
    
})

const port = process.env.PORT || 9600;

app.listen(port, function() {
    console.log("Listening " + port);
})