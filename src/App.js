import React, { useState } from 'react';
import './App.css';
// import TaskTable from "./components/TaskTable/TaskTable";
import TaskForm from "./components/TaskForm/TaskForm";

function App() {
  const [taskCreate, setTaskCreate] = useState(false);
  const [taskData, setTaskData] = useState([]);
  const [rowColor, setRowColor] = useState('sin_iniciar');
  const [number, setNumber] = useState(0);

  const deleteAction = (indexDelete) => {
    taskData.splice(indexDelete, 1);
    const newData = taskData;
    setTaskData(newData);
    setNumber(number + 1);
  };

  const actionUpdate = (exampleData, indexRow) => {
    setRowColor(exampleData);
    taskData[indexRow].state = exampleData;
    setNumber(number + 2);
  };

  return (
    <div>
      {taskCreate ? (
        <TaskForm close={() => setTaskCreate(!taskCreate)} setData={setTaskData}/>
      ) : (
        <div>
          <div className="New-task-button">
            <button onClick={() => setTaskCreate(!taskCreate)}>Tarea Nueva</button>
          </div>
          <div className="List">
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Nombre Tarea</th>
                    <th>Descripcion</th>
                    <th>Estado</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {taskData?.map((data, index) => {
                    return (
                      <tr 
                        style={{
                          backgroundColor: data.state === 'completado' ? 'green' :
                          data.state === 'en_proceso' ? 'blue' : 'white',
                        }}
                        key={index}
                      >
                        <td>{data.task_name}</td>
                        <td>{data.description}</td>
                        <td>
                          <select
                            defaultValue={data.state}
                            onChange={(e) => actionUpdate(e.target.value, index)}
                          >
                            <option value="">-- Seleccione --</option>
                            <option value="completado">Completado</option>
                            <option value="en_proceso">En Proceso</option>
                            <option value="sin_iniciar">Sin Iniciar</option>
                          </select>
                        </td>
                        <td className="Delete-option" onClick={() => deleteAction(index)}>Eliminar</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
