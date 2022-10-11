import React from 'react'
import Todo from './Todo'


const TodoList = ({todos,setTodos,filter }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filter.map((todo)=>(
          <Todo 
          todos={todos}
          setTodos={setTodos}
          key={todo.id} 
          text={todo.text}
          todo={todo}
          >

           </Todo>
        ))}
    
      </ul>
      
    </div>
  )
}

export default TodoList
