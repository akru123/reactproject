import React from 'react'
import { useState } from 'react';

const Add = ({addTask}) => {
  const[value,setValue]=useState("");
  
  const addItem=()=>{
    addTask(value);
    setValue("")
  };
  return (
    <>
      <div className='input-container'>
        <input type="text" className='input'placeholder='Add student name' value={value}
        onChange={(e)=>
        {setValue(e.target.value);
        }}
        />
        <button onClick={addItem} className='add-btn'>ADD</button>
      </div>
    </>
  )
}

export default Add