var express = require('express');
var app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`backend running on port ${PORT}...`);
});
