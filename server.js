const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const app = express();

request('https://pokeapi.co/api/v2/pokemon', (error, response, body) => {
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
})


app.use(express.static(path.join(__dirname, 'public',)));

const port = process.env.port || 5000;

app.listen(port, () => 
console.log(`Server started on port ${port}`));

module.exports = app;