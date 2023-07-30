import React, { useReducer} from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentors() {
    //const [person,setPerson]=useState(initialPerson);
    const [person,dispatch]=useReducer(personReducer,initialPerson);

    const handleUpdate=()=>{
        const target=prompt(`바꿀 사람의 이름은 무엇입니까?`);
        const current=prompt(`바꾸고자 하는 사람의 이름은 무엇입니까?`);
        dispatch({type:'updated',target,current});
    };
    const handleAdd=()=>{
        const target=prompt(`추가할 사람의 이름은 무엇입니까?`);
        const title=prompt(`추가할 사람의 직함은 무엇입니까?`);
        dispatch({type:'added',name:target,title});
        //객체를 넘겨준것 {}이 안에 들어있음!
    };
    const handleDelete=()=>{
        const name=prompt(`삭제할 사람의 이름은 무엇입니까?`);
        dispatch({type:'deleted',name});
    };
    return (
        <div>
            <h1>
                {person.name}은 {person.title}!
            </h1>
            <p>
                {person.name}의 멘토는 
                <ul>
                    {person.mentors.map((mentor,index)=>(
                        <li key={index}>{mentor.name} ({mentor.title})</li>
                        ))
                    }
                </ul>
            </p>
            <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
            <button onClick={handleAdd}>멘토 추가하기</button>
            <button onClick={handleDelete}>멘토 삭제하기</button>
        </div>
    );
}

const initialPerson={
    name:'minjeong',
    title:'developer',
    mentors:[{
        name:'elly',
        title:'senior developer'
    },{
        name:'hoho',
        title:'developer'
    },
],};