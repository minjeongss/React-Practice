import React from "react";
import TodoItem from "./TodoItem.tsx";

function TodoList(){
    const todos=[
        {
            id:1,
            text:'Learn Context API',
            done:true
        },
        {
            id:2,
            text:'Learn TypeScript',
            done:true 
        },
        {
            id:3,
            text:'Use TypeScript with Context API',
            done:false 
        }
    ];
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