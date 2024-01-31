const WebSocket = require('ws');
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Servidor HTTP creado para WebSocket\n');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Cliente conectado');

  ws.on('message', (message) => {
    console.log(`Mensaje recibido: ${message}`);

    ws.send('Mensaje recibido por el servidor');
  });

  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor HTTP y WebSocket iniciado en http://localhost:${PORT}`);
});
