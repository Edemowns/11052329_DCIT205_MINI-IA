const express = require ('express');
const router = express.Router();

router('/',(req, res, next) =>{
    res.send('getting a list of all products'),
})

module.exports = router;