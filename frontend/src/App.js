import './App.css';
import Tarefa from './components/Tarefa';
import { useState, useEffect } from 'react';

function App() {

const [tasks, setTasks] = useState(
  []
)

function getData() {
  fetch('http://localhost:3000/todo', { method: "GET"})
  .then(response => response.json())
  .then(data => setTasks(data))
}

useEffect(() => {
  getData();
}, []);


  return (
    <div className="App">
      <h1>Organizador de Tarefas</h1>

      {tasks.map(task => {
        return <Tarefa task={task} />
      })}

      <button>Todas as tarefas</button>
      <button>Tarefas pendentes</button>
      <button>Tarefas concluídos</button>

      <button>Inserir Nova Tarefa</button>
    </div>
  );
}

export default App;
