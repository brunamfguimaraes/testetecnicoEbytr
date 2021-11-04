import './App.css';
import React from 'react';
import Tarefa from './components/Tarefa';
import { useState, useEffect } from 'react';

function App() {

const [tasks, setTasks] = useState([]);

function getData() {
  fetch('http://localhost:3000/todo', { method: "GET"})
  .then(response => response.json())
  .then(data => setTasks(data))
}
function inserirTarefa() {
  fetch('http://localhost:3000/todo',
  {
    method: "POST",
    headers: { 'Content-Type': "application/json"},
    body: JSON.stringify({ "task": ""})})
  .then(response => response.json())
  .then(() => getData())
}

useEffect(() => {
  getData();
}, []);


  return (
    <div className="App">
      <h1>Organizador de Tarefas</h1>

      { tasks.map(task => {
        return < Tarefa task={task} key={task._id}/>
      }) }

      <button>Todas as tarefas</button>
      <button>Tarefas pendentes</button>
      <button>Tarefas concluídos</button>

      <button onClick={ inserirTarefa }>Inserir Nova Tarefa</button>
    </div>
  );
}

export default App;
