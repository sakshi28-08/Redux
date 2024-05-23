import React from 'react'
import {  useDispatch , useSelector } from 'react-redux'
import { removeTodo } from '../reduxFeature/todofeature'

export default function Printtodo() {
  let todos = useSelector(state => state.todos)
  
  let dispatch= useDispatch()
  console.log(todos)
  return (
    <>
    {todos.map((item)=>(
      <div className='w-full flex justify-center' key=
      {item .id}>
         <div className='flex mt-12 bg-gray-400 p-4 w-9/12 rounded justify-between text-white text-2xl'>
          <div>{item.text}</div>
          <button onClick={()=> dispatch(removeTodo(item.id))}>❌</button>
          </div>
          </div>
    ))}
    
      
    </>
  )
}
