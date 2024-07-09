// // backend/server.js
// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// const PORT = process.env.PORT || 4000;

// io.on('connection', (socket) => {
//   console.log('New client connected');
//   socket.on('locationUpdate', (data) => {
//     io.emit('locationUpdate', data);
//   });
//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));






// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const cors = require('cors');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server, {
//   cors: {
//     origin: "http://localhost:3000", // Your frontend's origin
//     methods: ["GET", "POST"]
//   }
// });

// app.use(cors({
//   origin: 'http://localhost:3000' // Your frontend's origin
// }));

// io.on('connection', (socket) => {
//   console.log('New client connected');

//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });

//   socket.on('locationUpdate', (data) => {
//     io.emit('locationUpdate', data);
//   });
// });

// const PORT = 4000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

app.use(cors({
  origin: 'http://localhost:3000'
}));

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('locationUpdate', (data) => {
    io.emit('locationUpdate', data);
  });
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
