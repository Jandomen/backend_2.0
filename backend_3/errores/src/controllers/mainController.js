const express = require('express');
const router = express.Router();
const logger = require('../utils/logger');

router.get('/', async (req, res) => {
  try {
    
    const result = await someAsyncFunction();
    res.json(result);
  } catch (error) {
    logger.error(`Error en la ruta /: ${error.message}`);
    res.status(500).send('Error interno del servidor');
  }
});



module.exports = router;
