import { createContext, Dispatch, useReducer, useContext} from "react";

//context definition
export type Todo={
    id:number;
    text:string;
    done:boolean;
};

type TodosState=Todo[];
const TodoStateContext=createContext<TodosState|undefined>(undefined);

//action
//정의: state에 변화가 필요할 때 발생, 하나의 객체로 취급
//기능
//  - type: 어떤 동작인지 표기
type Action=
{type:'CREATE'; text:string}
| {type:'TOGGLE'; id:number}
| {type:'REMOVE'; id:number};

//dispatch
//정의: Reducer에게 Action을 발생하도록 명령
type TodosDispatch=Dispatch<Action>;
const TodosDispatchContext=createContext<TodosDispatch | undefined>(undefined);

//reducer
//정의: Action의 동작을 수행
function todosReducer(state:TodosState, action:Action):TodosState{
   switch(action.type){
    case 'CREATE':
        const nextId=Math.max(...state.map(todo=>todo.id))+1;
        return state.concat({
            id:nextId,
            text:action.text,
            done:false
        });
    case 'TOGGLE':
        return state.map(todo =>
            todo.id===action.id?{...todo,done:!todo.done}:todo
        );
    case 'REMOVE':
        return state.filter(todo=> todo.id!==action.id);
    default:
        throw new Error('Unhandeled action');
   } 
}

//provider
//정의: 최상위 컴포넌트에 위치해 전역 상태를 하위 컴포넌트에 제공
export function TodosContextProvider({children}:{children:React.ReactNode}){
    const [todos, dispatch]=useReducer(todosReducer,[
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
    ]);
}

//custom Hooks
export function useTodosState(){
    const state=useContext(TodoStateContext);
    if(!state) throw new Error('TodosProvider not found');
    return state;
}

export function useTodosDispatch(){
    const dispatch=useContext(TodosDispatchContext);
    if(!dispatch) throw new Error('TodosProvider not found');
    return dispatch;
}