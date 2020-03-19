const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const server = require('http').Server(app);

const userRouter = require('./user');
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user', userRouter);
server.listen(8081, function() {
    console.log('Node app start at port 8081');
});
