const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();

fetch('https://pokeapi.co/api/v2/pokemon?limit=151.json').then(function (response) {
    return response.json();
}).then(function (obj) {
    console.log(obj);
}).catch(function (error) {
    console.error("An error has occured.");
    console.error(error);
});

app.use(express.static(path.join(__dirname, 'public',)));

const port = process.env.port || 5000;

app.listen(port, () => 
console.log(`Server started on port ${port}`));

module.exports = app;