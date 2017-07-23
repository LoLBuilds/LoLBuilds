const router  = require('express').Router();
const { getFreeChamps } = require('../services/lol.js');

router.get('/', getFreeChamps, (req, res) => {
  res.json(res.free);
});

module.exports = router;

