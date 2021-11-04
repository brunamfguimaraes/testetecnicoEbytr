const express = require('express');
const app = express();
const port = 3000;
const todoRouter = require('./controllers/todoController');
const todoModel = require('./models/todoModel');

app.use('/todo', todoRouter, todoModel.getAllList);

app.listen(port, () => {
  console.log(`Executando na porta ${port}`);
});
