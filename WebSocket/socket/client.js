const io = require('socket.io-client');

const serverUrl = 'http://localhost:3000';

const socket = io(serverUrl);

socket.on('connect', () => {
  console.log('Conexión establecida');

  const data = 'Mensaje desdel cliente hacial servidor, Esto es el backend'
  
  socket.emit('message', data);

});

socket.on('response', (data) => {
  console.log(`Respuesta del servidor: ${data}`);
});

socket.on('disconnect', () => {
  console.log('Desconectado del servidor');
});
