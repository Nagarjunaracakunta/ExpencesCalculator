import React, { useState } from 'react';

import CIcon from '@coreui/icons-react';
import {  cilMedicalCross } from '@coreui/icons';
import {  cilSettings,cilTruck } from '@coreui/icons';
import {  cilShareBoxed } from '@coreui/icons';
import {  cilDelete } from '@coreui/icons';
import {  cilGarage } from '@coreui/icons';

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setEditing] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);
  const [color, setColor] = useState(task.color);
  const [bgmcolor, setBgColor] = useState(task.bgmColor);
  const [item1, setItem1] = useState(task.item1);
  const [item2, setItem2] = useState(task.item2);
  const [item3, setItem3] = useState(task.item3);

  const handleUpdate = () => {
    onUpdate(task.id, updatedDescription,item1,item2,item3,color);
    setEditing(false);
  };
 
  const item1style = {
    width: '100%',
    height: '70px',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: bgmcolor,
    borderRadius: '5px',
    paddingTop: '10px',
    paddingBottom: '10px',
    marginTop: '10px',
    marginBottom: '10px',
    
  }
  const containerStyle = {
    display: 'flex', // Use flexbox
  };

  const itemStyle = {

    backgroundColor: color,
    marginTop: '20px',
  }
  const inputStyle = {
    marginLeft: '20px',
    height: '30px',
    marginTop: '10px',
    marginBottom: '10px',
    width: '200px',
    
  }
  const divStyle = {
    width: '50%', // Set width to 50% for each div
    padding: '20px',
    boxSizing: 'border-box',
    height: '100px',
    display: 'flex',
  };
  const div1Style = {
    width: '50%', // Set width to 50% for each div
    padding: '20px',
    boxSizing: 'border-box',
  };
  
  return (
    <div style={itemStyle} >
      {isEditing ? (
        <>
          <input
            style={inputStyle}
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <input
            style={inputStyle}
            type="text"
            value={item1}
            onChange={(e) => setItem1(e.target.value)}
          />
          <input
            style={inputStyle}
            type="text"
            value={item2}
            onChange={(e) => setItem2(e.target.value)}
          />
          <input
            style={inputStyle}
            type="text"
            value={item3}
            onChange={(e) => setItem3(e.target.value)}
          />
          <input
            style={inputStyle}
            type="text"
            value={color}
            onChange={(e) => setItem3(e.target.value)}
          />
          <button 
            style={inputStyle} onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          <div>
            <div style={containerStyle}>
              <div style={divStyle}>

               <CIcon icon={cilGarage} size="sm" />
                <h1>{task.description}</h1>
              </div>
              <div style={div1Style}>
                  <ul>
                    <li>{item1}</li>
                    <li>{item2}</li>
                  </ul>
                    <span>{item3}</span>
              </div>
            </div>
            <div style={item1style}>
              <CIcon  onClick={() => setEditing(true)} icon={cilMedicalCross} size="sm" />
              <CIcon  icon={cilSettings} size="sm" />
              <CIcon  icon={cilShareBoxed} size="sm" />
              <CIcon  onClick={() => onDelete(task.id)} icon={cilDelete} size="sm" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;