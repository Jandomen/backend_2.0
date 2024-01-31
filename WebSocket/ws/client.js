const WebSocket = require('ws');

const serverUrl = 'ws://localhost:3000';

const ws = new WebSocket(serverUrl);

ws.on('open', () => {
  console.log('Conexión abierta');
  
  ws.send('Hola, servidor!');
  ws.send("mensaje de backend en ws")
});

ws.on('message', (data) => {
  console.log(`Mensaje del servidor: ${data}`);
});

ws.on('close', () => {
  console.log('Conexión cerrada');
});
