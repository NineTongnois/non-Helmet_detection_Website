const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const axios = require('axios');

router.get('/',function(req,res,next){
    console.log('logout');
});

module.exports = router;