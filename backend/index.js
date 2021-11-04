const express = require('express');
const app = express();
const port = 3000;
const todoRouter = require('./controllers/todoController');

const cors = require("cors");
const corsOptions ={
   origin:'*',
   credentials:true,
   optionSuccessStatus:200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/todo', todoRouter);

app.listen(port, () => {
  console.log(`Executando na porta ${port}`);
});
