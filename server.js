const app = require('express')();
const path = require('path');
const express = require('express');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join('public')));

app.use((req, res, next) => {
    res.send(path.join(__dirname, 'build', 'index.html'));
});


app.listen(5300, () => {
    console.log(`Server stsrted on port 5300`);
});