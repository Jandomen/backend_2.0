const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.get('/', (req, res) => {
  res.send('Servidor HTTP creado para Socket.IO\n' );
});

io.on('connection', (socket) => {
  console.log('Cliente conectado');

  socket.on('message', (message) => {
    console.log(`Mensaje recibido: ${message}`);

    socket.emit('response', 'Mensaje recibido por el servidor');
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor HTTP y WebSocket iniciado en http://localhost:${PORT}`);
});

