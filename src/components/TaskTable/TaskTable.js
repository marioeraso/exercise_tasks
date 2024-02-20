import React from "react";
import "../../App.css"

function TaskTable ({dataList}) {
  const deleteAction = (dataDelete) => {
  };

  return(
    <div className="List-example">
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {dataList?.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.task_name}</td>
                  <td>{data.description}</td>
                  <td>{data.state}</td>
                  <td className="Delete-option" onClick={() => deleteAction(data)}>Eliminar</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
