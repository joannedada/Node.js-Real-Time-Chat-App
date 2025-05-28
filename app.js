const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route handler
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Socket.IO connection
io.on('connection', (socket) => {
  console.log('New user connected');
  
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
  
  // Add this to test real-time functionality
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Broadcast to all clients
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});