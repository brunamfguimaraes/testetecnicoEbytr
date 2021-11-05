import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Tarefa({ item, atualizarTarefa }) {

  return (
    <div className="main">
      <input type="checkbox" checked={ !item.active } onClick={() => {atualizarTarefa({...item, active: !item.active }) } }/>
      <span>{ item.task }</span>
      <button>Apagar</button>
  </div>
  );
}

Tarefa.propTypes = {
  item: PropTypes.object,
  atualizarTarefa: PropTypes.func,
};
export default Tarefa;