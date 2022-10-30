import React, { useEffect, useState } from 'react'

import Task from "./Task";
import Add from './Add';
import "./student.css";


const Student = () => {
   const[tasks,setTasks]=useState([]);


   useEffect(()=>{
      document.title='You have ${tasks.length} students added'
   });

   const addTask=(title)=>{
      const newTask=[...tasks,{title}];
      setTasks(newTask);
   };
      const removeTask=(index)=>{
         const newTask=[...tasks];
         newTask.splice(index,1);
         setTasks(newTask)
      };

 
      return (
    <>
      <div className='studentdetails-container'>
      <div className='header'>STUDENTS DETAILS</div>
      <div className='add-student'>
         <Add addTask={addTask}/></div>
      <div className='tasks'>
         {tasks.map((task,index)=>{
            <Task task={task} removeTask={removeTask}
            index={index} key={index}/>
         }
            

         )}
         
      </div>
      </div>
    </>
  )
}

export default Student;