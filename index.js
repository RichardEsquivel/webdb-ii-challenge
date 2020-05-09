//creating router
const express = require('express')
const vehsRouter = require('./cars/car-router')
//create server
const server = express();

//create middleware express.json to parse json body
server.use(express.json());

server.use('/vehs', vehsRouter);

//declare value of port unless it is set up by the environment such as Herokuy
const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Argghh mateys server running off port ${port}!!!`));
