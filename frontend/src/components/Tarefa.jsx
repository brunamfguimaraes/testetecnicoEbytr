import React from 'react';
import PropTypes from 'prop-types';

function Tarefa({ task }) {

  return (
    <div className="">
      <input type="checkbox" />
      <span>{ task.task }</span>
      <button>Apagar</button>
  </div>
  );
}

Tarefa.propTypes = {
  task: PropTypes.object,
};
export default Tarefa;