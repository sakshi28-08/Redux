import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addtodo} from '../reduxFeature/todofeature'

export default function Addtodo() {
  let [inp, setInp] = useState('')
  console.log(inp)
  let dispatch = useDispatch()
  function handleTodo(){
    dispatch(addtodo(inp))
    setInp('')
  }
  return (
    <div className='flex flex-col h-36 justify-between items-center bg-red-200'>
      <h1 className='text-center text-4xl font-bold mt-6'>Add yours todo's</h1>
      <div className='w-full flex justify-center'>
      <input type="text" className='border-2 border-black rounded w-1/2' placeholder='Write your todo.....'
      value={inp}
      onChange={(e)=>setInp(e.target.value)}
      />
      <button className='p-2 bg-red-600 ml-4 rounded text-white hover:bg-red-400 hover:text-black'
      onClick={handleTodo}
      >Add Todo</button>
      </div>
    </div>
  )
}
