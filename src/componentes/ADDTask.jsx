import React from 'react';
import { useState } from 'react';
import './ADDTask.css'
import Button from './button'

const ADDTask  = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
    setInputData(e.target.value)
    }
    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData("");
    }
    return ( 
        <div className='add-task-container'>
            <input onChange={handleInputChange}
             className='add-task-input'
             value={inputData}
             type="text" />
            <div className='add-task-button-container'>
            <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
            
        </div>
     );
}
 
export default ADDTask ;