const express = require ('express');
const router = express.Router();

app.get('/', (req, res) => {
    res.send('Welcome to the Kolovivi API');
  });
  

module.exports = router;