import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Tarefa({ task, atualizarTarefa }) {

  return (
    <div className="main">
      <input type="checkbox" checked={ !task.active } onClick={() => {atualizarTarefa({...task, active: !task.active }) } }/>
      <span>{ task.task }</span>
      <button>Apagar</button>
  </div>
  );
}

Tarefa.propTypes = {
  task: PropTypes.object,
  atualizarTarefa: PropTypes.func,
};
export default Tarefa;