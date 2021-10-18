const express = require('express');

const users = require('../controllers/users');

const router = express();

router.post('/users', users.usersRegister);
router.get('/users', users.usersRead);
router.get('/users/:id', users.getUser);
router.put('/users/:id', users.usersUpdate);
router.delete('/users/:id', users.usersDelete);

module.exports = router;