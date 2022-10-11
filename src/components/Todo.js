import React from "react";

const Todo = ({ text,todo, setTodos, todos }) => {
  //events
  const deleteHandler = () => {
    setTodos(todos.filter(el=>el.id !== todo.id ))
  };

  const complateHandler=()=>{
    setTodos(todos.map((item)=>{
        if(item.id=== todo.id){
            return{
                ...item,completed:!item.completed
            }
        }
        return item;
    }))

  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed": "" }`}>{text}</li>
      <button onClick={complateHandler} className="complate-btn">
        <i className="fa fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
