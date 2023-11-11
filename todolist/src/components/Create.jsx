import React, { useState } from 'react'
import axios from "axios"

const Create = () => {
  const [task,setTask] = useState()
  const handleAdd = () => {
    axios.post("http://localhost:3001/add", {task: task})
    .then(result => {
      location.reload()
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='flex mb-4'>
        <input className='border-2 p-2' type='text' onChange={(e) => setTask(e.target.value)}/>
        <button className='bg-black text-white' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create