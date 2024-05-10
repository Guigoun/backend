const express = require('express');

const controllerProduto = require('../controllers/controller_produto');

const router = express.Router();

router.post('/', (req, res) => res.status(201).json({}));

module.exports = router;