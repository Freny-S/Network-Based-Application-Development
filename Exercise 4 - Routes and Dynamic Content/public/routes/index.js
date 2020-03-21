var express = require('express');
var router = express.Router();

router.get('/*', function (req, res) {
  res.send('no information available or requested');
})

module.exports = router;
