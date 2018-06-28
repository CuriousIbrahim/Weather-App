const express = require('express');
const path = require('path');

var router = express.Router();

router.get('/', (req, res) => {

  res.render('index', data = {
    anything: false
  });
});

module.exports = router;
