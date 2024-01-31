const express = require("express");
const app = express();
const helmet = require("helmet");
const compression = require('compression');
const PORT = 3000;

app.use(compression());

app.use(helmet({
    contentSecurityPolicy: false, 
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'example.com'],
      styleSrc: ["'self'", 'styles.example.com'],
      fontSrc: ['fonts.example.com'],
      imgSrc: ['img.example.com', 'data:'],
      sandbox: ['allow-forms', 'allow-scripts'],
    },
    
    cacheControl: false,
    
    etag: false,
  }));

app.get('/', (req, res) => {
    const palabra = {
      page: '///  El Jandomen  ///'
    };
  
    res.send(palabra.page.repeat(1000));
  });
  

app.listen(PORT, () => {
    console.log(`Servicio con exito en puerto ${PORT}`)
})