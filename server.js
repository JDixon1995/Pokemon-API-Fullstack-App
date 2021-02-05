const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.send('pika pika');
})

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));