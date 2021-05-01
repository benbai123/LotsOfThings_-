const express = require('express');
const router = express.Router();

router.post('/hello', async function(req, res, next) {
  let name = req.body.name;
  res.json({
      msg: `Hello ${name}!`
  });
  next();
});

module.exports = router;