const express = require('express');
const todoModel = require('../models/todoModel');
const router = express.Router();


router.get('/', async (req, res, next) => {
  const products = await todoModel.getAllList();

  res.status(200).json(products);
});

/* router.get('/', (req, res) => {
  res.send();
});
 */
module.exports = router;