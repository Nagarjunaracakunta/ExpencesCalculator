
import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Electricity',color: '#fcad08',item1:'2019:738.99 kWh|$303.30',item2:'Apr:    71.09 kWh',item3:'Additional Payment: 36.01 [31/01/2020]',bgmColor: '#b07905'},
    { id: 2, description: 'Vehicle' ,color: '#d3d3d3',item1:'2019: 14,283.53 km',item2:'Apr:    985.01 km',item3:'Master reading: 61,374.0 [30/03/2019]', bgmColor: '#939393'},
    { id: 3, description: 'Cold water' ,color: '#3c95dd',item1:'2019:24.13 m3|$56.46',item2:'Apr:    2.05 m3|  $4.80',item3:'Additional Payment: 56.46 [31/12/2019]', bgmColor: '#246b99'},
    { id: 4, description: 'Hot water' ,color: '#e74f3c' ,item1:'2019:9.40 m3|$92.40',item2:'Apr:    0.38 m3|$5.26',item3:'Repayment: $51.60[31/12/2019]', bgmColor: '#a2362a'},
    { id: 5, description: 'Fuel costs' ,color: '#4ea151' ,item1:'2019:243.70 ltr',item2:'Apr:    68.51 ltr |$90.98', bgmColor: '#366f3a'},
    { id: 6, description: 'Heater' ,color: '#f0dfb4' ,item1:'2019:0.81 H',item2:'Apr:    0.07 H',item3:'Master reading: 1 [01/04/2019]', bgmColor: '#a69d7d'},
    { id: 7, description: 'Sewage' ,color: '#a68772' ,item1:'2019:2,637.36 ltr',item2:'Apr:    201.18 ltr', bgmColor: '#745f52'},
  ]);

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleUpdate = (taskId, updatedDescription,updateItem1,updateItem2,updateItem3,updateColor) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, description: updatedDescription,item1: updateItem1,item2: updateItem2,item3: updateItem3,color: updateColor, } : task
    );
    setTasks(updatedTasks);
  };
  const myStyle = {
    color: 'black',
    fontSize: '18px',
    border: '1px solid black',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: 'black',
    fontFamily: 'Arial, Helvetica, sans-serif',
  };
  return (
    <div>
      <div className="" style={myStyle}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={handleDelete} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;