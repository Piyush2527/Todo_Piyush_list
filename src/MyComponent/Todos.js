import React from 'react'
import TodoItem from './Todo'

export const Todos = ({todoss,onDelete}) => {
  let myStyle={
    minHeight: "70vh",
    margin:"40px auto"
  }
  return (
    <div className='container' style={myStyle}>
      <h3 className='my-3'>Todos List</h3>
      {todoss.length===0? <b>No Todos List to display</b>:
      todoss.map((todo)=>{
        return(
          <TodoItem todo2={todo} key={todo.sno} onDelete={onDelete}/>
        )
      })

      }
      

    </div>
  )
}
