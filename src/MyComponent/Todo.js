import React from 'react'

const TodoItem = ({todo2,onDelete}) => {
  return (
    <div>
      <h4>{todo2.title}</h4>
      <p>{todo2.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo2)} }>Delete</button>
    </div>
  )
}

export default TodoItem