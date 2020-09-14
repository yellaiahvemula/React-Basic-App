const express = require('express');
const path = require('path');
const app = express();

const environment = process.env.NODE_ENV || 'local';
const host = process.env.host || 'localhost';
const port = process.env.PORT || 3000;

const apiBaseUrl = environment === 'development' ? `${host}:${port}` : `host`;

app.use(express.static(path.join(`${__dirname}/build`)));
app.use(express.static(path.join('public')));

app.get('/*',(req, res, next) => {
    res.send(path.join(`${__dirname}/build/index.html`));
});

app.get('/getData', (req, res, next) => {
    res.send('Hello .. complete your application ....');
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});