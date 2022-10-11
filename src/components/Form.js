
import React from "react";

const Form=({setInputText, setTodos,todos,inputText,setStatus
})=>{
    //js code function
    const inputTextHandler=(e)=>{
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler=(e)=>{
        e.preventDefault();
        setTodos([
            ...todos,{text:inputText,completed:false,id:Math.random()*100}
        ]);
        setInputText('');
    }

    const statusHandler=(e)=>{
        setStatus(e.target.value);

    }
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"></input>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        

        </form>

    )
}

export default Form;