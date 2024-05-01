import React from "react";
import TodoItem from "./TodoItem.tsx";
import { useTodosState } from "../contexts/TodosContext.tsx";

function TodoList(){
    // 기존: context 사용 전
    // const todos=[
    //     {
    //         id:1,
    //         text:'Learn Context API',
    //         done:true
    //     },
    //     {
    //         id:2,
    //         text:'Learn TypeScript',
    //         done:true 
    //     },
    //     {
    //         id:3,
    //         text:'Use TypeScript with Context API',
    //         done:false 
    //     }
    // ];

    // 이후: context 사용 후
    const todos=useTodosState();
    return(
        <ul>
            {todos.map(todo=>(
                <TodoItem todo={todo} key={todo.id}/>
            ))

            }
        </ul>
    );
}

export default TodoList;