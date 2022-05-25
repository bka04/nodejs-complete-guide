const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => { // handles request
  res.sendFile(path.join(rootDir, 'views', 'shop.html')); // use path.join so it works on OS that use different slashes (eg linux vs windows)
});

module.exports = router;