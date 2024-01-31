const express = require('express');
const cacheController = require('express-cache-controller');

const app = express();


app.use(cacheController({
  public: true,
  maxAge: 600,
}));

app.get('/', (req, res) => {
  const palabra = {
    page: 'home'
  };

  res.send(palabra.page.repeat(1000));
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
