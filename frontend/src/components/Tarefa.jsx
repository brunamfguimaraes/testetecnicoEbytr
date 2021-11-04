function Tarefa({ task }) {
  return (
    <div className="">
    <input type="checkbox" />
    <span>{ task.task }</span>
    <button>Apagar</button>
  </div>
  );
};

export default Tarefa;