const WebSocket = require('ws');
const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Manejo de solicitudes HTTP
app.use(express.static(path.join(__dirname, 'public')));

// En el servidor:
wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`Mensaje recibido: ${message}`);

    // Broadcast del mensaje a todos los clientes conectados
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });




  // Evento de cierre de conexión
  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor WebSocket iniciado en http://localhost:${PORT}`);
});
