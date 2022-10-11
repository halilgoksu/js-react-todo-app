import React, { useState,useEffect} from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {

  // useState
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);

  // useEffect
  useEffect(()=>{
    saveLocalTodos();
    filterHandler();
  },[todos,status]);

  useEffect(()=>{
    getLocalTodos();
  },[]);

  const saveLocalTodos=()=>{
    localStorage.setItem("todos",JSON.stringify(todos));

  };

  const getLocalTodos=()=>{
    if(localStorage.getItem('todos')===null){
    localStorage.setItem('todos',JSON.stringify([]));

    }else{
      let todoLocal=JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  }


  const filterHandler = () => {
    switch (status) {
      case "complated":
        setFilter(todos.filter((todo) => todo.complated === true));
        break;
      case "uncomplated":
        setFilter(todos.filter((todo) => todo.complated === false));
        break;
      default:
        setFilter(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        getLocalTodos={getLocalTodos}
        filter={filter}
       
      ></Form>

      <TodoList
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        filter={filter}
        setFilter={setFilter}
      ></TodoList>
    </div>
  );
}

export default App;
