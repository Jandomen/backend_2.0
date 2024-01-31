const express = require('express');
const bodyParser = require('body-parser');
const mainController = require('./controllers/mainController');
const logger = require('./utils/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/', mainController);

// Middleware para manejo de errores no manejados
app.use((err, req, res, next) => {
  logger.error(`Error no manejado: ${err.stack}`);
  res.status(500).send('Error interno del servidor');
});

// Inicia el servidor
app.listen(PORT, () => {
  logger.info(`Servidor iniciado en el puerto ${PORT}`);
});
