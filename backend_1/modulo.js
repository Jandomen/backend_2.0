const modulo1 = require('./modulo1');
const modulo2 = require('./modulo2');
const axios = require('axios');
const operaciones = require('./operaciones');



console.log(modulo1); 
console.log(modulo2(3, 5)); 
console.log(operaciones.suma(5, 3)); 
console.log(operaciones.resta(5, 3)); 


const fs = require('fs');
fs.readFile('archivo.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});


axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

