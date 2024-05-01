import React from "react";
import TodoForm from "./components/TodoForm.tsx";
import TodoList from "./components/TodoList.tsx";
import { TodosContextProvider } from "./contexts/TodosContext.tsx";

const App=()=>{
    return(
        <TodosContextProvider>
            <TodoForm />
            <TodoList />
        </TodosContextProvider>
    );
};

export default App;