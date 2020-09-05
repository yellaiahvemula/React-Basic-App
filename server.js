const app = require('express')();
const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join('public')));

app.get('/*',(req, res, next) => {
    res.send(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});