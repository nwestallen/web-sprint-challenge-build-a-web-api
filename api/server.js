const express = require('express');
const server = express();
server.use(express.json())
// Complete your server here!
// Do NOT `server.listen()` inside this file!
const actionsRouter = require('./actions/actions-router');
const projectsRouter = require('./projects/projects-router');

server.use('/api/actions', actionsRouter);
server.use('/api/projects', projectsRouter);

module.exports = server;
