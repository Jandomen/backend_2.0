const express = require('express');
const app = express();
const puerto = 5000;


app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
  });
  

app.post('/usuarios', (req, res) => {
    const nuevoUsuario = req.body;
    console.log('Usuario creado >_')
    res.send('Usuario creado exitosamente');
  });
  
app.post('/administradores', (req, res) => {
     res.send('Crear administradores')
  });  




app.get('/tiempo', (req,res) => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const tiempo = hour + ':' + minute + ':' + second 
    console.log('hora actual: ' + tiempo)
    res.send("La hora es: " + tiempo)
  }); 






app.get('/detalles', (req,res) => {
    const detalles = req.headers
    res.send(detalles)
  })  

  








app.get('/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    console.log(userId)
    res.send(`Detalles del usuario ${userId}`);
  });
 
app.put('/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    console.log('Usuario ' + userId + ' se actualizado')
    res.send(`Usuario ${userId} actualizado`);
  });
  
app.delete('/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    console.log('usuario: '+ userId + ' se ha eliminado')
    res.send(`Usuario ${userId} eliminado`);
  });
  

  







const middlewareEjemplo = (req, res, next) => {
    console.log('Middleware ejecutado');
    next();
  };
  
app.use(middlewareEjemplo);
  



app.get('/ruta-con-middleware', (req, res) => {
    res.send('Respuesta de la ruta con middleware');
  });
 
  

const middlewareRegistro = (req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
  };
  
app.use(middlewareRegistro);
  


const verificarAutenticacion = (req, res, next) => {
    if (usuarioAutenticado) {
      next(); 
    } else {
      res.status(401).send('No autorizado');
    }
  };
  
app.get('/ruta-segura', verificarAutenticacion, (req, res) => {
    res.send('Contenido seguro');
  });
  













app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal');
  });
  


app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
