import { useState, React } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Tarefa({ item, atualizarTarefa, deletarTarefa }) {

  const [temtask, setTempTask] = useState("");

  return (
    <div className="main">
      <input
        type="checkbox"
        checked={ !item.active }
        onClick={() => { atualizarTarefa({...item, active: !item.active }) } }
      />

      { ((item.edit) || (item.task === "")) ? (
        <input
          type="text"
          placeholder={item.task}
          onChange={(e) => { setTempTask(e.target.value) } }
          onBlur={() => { atualizarTarefa({...item, task: temtask, edit: false }) } }
          />
      )
        :
      <span
        onClick={() => { atualizarTarefa({ ...item, edit:true }) } }
        style={item.active ? {} : { textDecoration: "line-through" } }
      >{ item.task }</span>
    }
      <button onClick={() => { deletarTarefa(item) } }>Apagar</button>
  </div>
  );
}

Tarefa.propTypes = {
  item: PropTypes.object,
  atualizarTarefa: PropTypes.func,
  deletarTarefa: PropTypes.func,
};
export default Tarefa;