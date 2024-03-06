const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware we are!');
    next(); //allows to continue with next middleware
});

app.use((req, res, next) => {
    console.log('In another middleware we are!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000); // alternative for below 2lines

//const server = http.createServer(app);
//server.listen(3000);


