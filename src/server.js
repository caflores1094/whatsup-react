const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//run server 
export const server = app.listen(3000, () => {
  console.log('listening on port: 3000');
});

const io = require('socket.io')(server);

//Set socket.io listeners
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
