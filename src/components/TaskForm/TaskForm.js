import React, { useState } from "react";
import "../../App.css"

function TaskForm ({close, setData}) {
  const [taskData, setTaskData] = useState({
    task_name: '',
    description: '',
    state: 'sin_iniciar',
  });

  const createRecord = () => {
    setData(prevArray => [...prevArray, taskData]);
    close();
  };

  return(
    <div className="Div-form">
      <form>
        <label>Nombre Tarea:
          <input
            type="text"
            onChange={(e) => setTaskData({...taskData, task_name: e.target.value})}
          />
        </label>
        <br/>
        <label>Drescripcion Breve:
          <input
            type="text"
            onChange={(e) => setTaskData({...taskData, description: e.target.value})}
          />
        </label>
        <br/>
        <div className="Div-button">
          <button onClick={() => createRecord()}>Crear Tarea</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
