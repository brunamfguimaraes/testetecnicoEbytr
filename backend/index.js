const express = require('express');
const app = express();
const port = 3000;
const todoRouter = require('./routes/todoRouter');

app.use('/todo', todoRouter);

app.listen(port, () => {
  console.log(`Executando na porta ${port}`);
});
