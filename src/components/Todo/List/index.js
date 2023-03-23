import React from 'react'

function List({toDos}) {
  return (
    <div>
       <ul>

        

       {toDos.map((toDo, i) => (
          <li key={i}>
            {/* Checkbox */}
            <input property="done" className="toggle" type="checkbox" />
            {/* toDos */}
            {toDo.task}
            {/* x butonu */}
            <button className="destroy" mv-action="delete(todo)">X</button>
          </li>
        ))}
            
          
					
		
       
       </ul>
    </div>
  )
}

export default List