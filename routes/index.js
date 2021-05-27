const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/products', authenticate, require('./products'));
router.use('/users', authenticate, require('./users'));


module.exports = router;