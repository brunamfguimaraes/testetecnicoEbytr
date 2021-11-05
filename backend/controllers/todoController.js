const express = require('express');
const todoModel = require('../models/todoModel');
const router = express.Router();

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { task, active, edit } = req.body;

    try {
      const result = await todoModel.updateTask({ id, task, active, edit });
      res.status(200).json(result);
  } catch (err) {
      res.status(500).send({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {

  try {
    const task = await todoModel.excludeTask(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

router.get('/', async (_req, res) => {

  try {
  const products = await todoModel.getAllList();
  res.status(200).json(products);
  } catch(err) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

router.post('/', async (req, res) => {

  try {
    const newTask = await todoModel.addNewTask(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

module.exports = router;