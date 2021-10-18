const express = require('express');

const users = require('../controllers/users');

const router = express();

router.post('/users', users.usersRegister);
router.get('/users', users.usersRead);

module.exports = router;