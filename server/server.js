const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db/config');
const models = require('./db/index');
const routes = require('./routes/index');
const socket = require('socket.io');
const PORT = process.env.PORT || 3000;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .use(express.static(path.resolve(__dirname, '../client/public')))
  .use('/api', routes);

const server = app.listen(PORT, err => {
  if (err) {
    console.log(`Error connecting to server! ${err}`);
  } else {
    console.log('Successfully connected to server!');
  }
})

//handling socket actions
const io = socket(server)
const users = {}

io.on('connection', (socket) => {
  console.log('socket connected', socket.id)

  socket.on('new user', (username) => {
    socket.nickname = username
    if (!users[socket.nickname]) {
      users[socket.nickname] = socket.id
      io.sockets.emit('user created', Object.keys(users))
    } else {
      return
    }
  })

  socket.on('private message', (msg) => {
    let socketTo = users[msg.to]
    let response = {
      from: msg.from,
      msg: msg.msg
    }
    io.sockets.connected[socketTo].emit('private message received', response)
  })

  socket.on('disconnect', () => {
    delete users[socket.nickname]
    socket.broadcast.emit('user disconnected', Object.keys(users))
  })
})