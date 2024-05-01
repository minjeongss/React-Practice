import React from "react";
import TodoForm from "./components/TodoForm.tsx";
import TodoList from "./components/TodoList.tsx";

const App=()=>{
    return(
        <>
            <TodoForm />
            <TodoList />
        </>
    );
};

export default App;