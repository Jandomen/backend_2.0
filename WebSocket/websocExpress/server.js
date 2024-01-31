const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ noServer: true });

// Configuración de la aplicación Express
app.use(express.static(path.join(__dirname, 'public')));

// Manejo de conexiones WebSocket
wss.on('connection', (ws) => {
  // Evento de mensaje desde el cliente
  ws.on('message', (message) => {
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

// Integramos WebSocket con el servidor Express
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor Express con WebSockets iniciado en http://localhost:${PORT}`);
});
