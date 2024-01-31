const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')
const port = 3000;
require('dotenv').config()

app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.get('/', (req,res) => {
  res.send('pagina raiz')
})


app.get('/api', validateToken, (req,res) => {
  res.json({
    username: req.user,
    tuits: [
      {
         id: 0,
         text: 'puede ser un comentario',
         username: 'Duplas'
      },
      {
        id: 1,
        text: 'puede ser un like',
        username: 'korn'
      },
      {
        id: 2,
        text: 'puede ser un pull request',
        username: 'ñero'
      }
    ]
  })
})

app.get('/login', (req,res) => {
    res.send(`
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>login</title>
    </head>
    <body>
    
        <form action="/auth" method="post">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" >
            <br>
    
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" >
            <br>
    
            <input type="submit" value="Submit">
        </form>
    
    </body>
    </html>
    `)
})

app.post('/auth', (req, res) => {
 
  const {username, password} = req.body;
 
  const user = {username: username};
 
  const accessToken = generateAccessToken(user);
  
  res.header('authorization', accessToken).json({
    message: 'Usuario autenticado',
    token: accessToken
  })

})

function generateAccessToken(user) {
  return jwt.sign(user, process.env.SECRET, {expiresIn: '30m'})
}

function validateToken(req, res, next) {
    const accessToken = req.headers['authorization'] || req.query.accesstoken;
    if(!accessToken) res.send('Acceso detenido');

    jwt.verify(accessToken, process.env.SECRET, (err, user) => {
      if(err) {
        res.send('Acceso denegado, token expirado o incorrecto')
      } else {
        req.user = user;
        req.header = header;
        next();
      }
    
    })

}

app.listen(port, () => {
  console.log(`Ejecutando servidor en el puerto ${port}`);
});