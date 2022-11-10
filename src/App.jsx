import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import ADDTask from "./componentes/ADDTask";
import Tasks from "./componentes/tasks"; 
import Header from "./componentes/header";
import TaskDetails from "./componentes/TaskDetails";

import './App.css';
const App = () => {

  const [tasks, setTasks] = useState([
    {
    id:'1',
    title: 'Estudar Programação',
    completed: false
  },
  {
    id:'2',
    title: 'Ler Livros',
    completed: true,
  },



  ]);
    
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task =>{
      if(task.id === taskId) return{...task, completed: !task.completed}
      return task;
    });
    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, 
      {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    },
  ];
  setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }
  return(
    
  <BrowserRouter>
        <div className="container">
   <Header/>
   <Routes>
      <Route path="/"  element={
        <div>
          <ADDTask handleTaskAddition={handleTaskAddition}  />
          <Tasks tasks={tasks} handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}/>
          </div>
          
          }/>
</Routes>
<Routes>
        <Route path="/:taskTitle" element={<TaskDetails/>}/>

        
      
</Routes>
    </div>

 </BrowserRouter>
 
 );
};
export default App;