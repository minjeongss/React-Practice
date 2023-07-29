import React, { useState } from 'react';

export default function AppMentors() {
    const [person,setPerson]=useState(initialPerson);
    const handleUpdate=()=>{
        const target=prompt(`바꿀 사람의 이름은 무엇입니까?`);
                const current=prompt(`바꾸고자 하는 사람의 이름은 무엇입니까?`);
                setPerson((prev)=>({...prev,mentors:person.mentors.map((mentor=>{
                    if (target===mentor.name){
                        return {...mentor,name:current};
                    }
                    return mentor;
                }))}));
    };
    const handleDelete=()=>{
        const target=prompt(`삭제할 사람의 이름은 무엇입니까?`);
                setPerson((prev)=>({...prev,
                    mentors:person.mentors.filter((mentor=>mentor.name!==target
                ))}));
    };
    const handleAdd=()=>{
        const target=prompt(`추가할 사람의 이름은 무엇입니까?`);
                const title=prompt(`추가할 사람의 직함은 무엇입니까?`);
                console.log(target,title);
                setPerson((prev)=>({...prev,
                    mentors:[...prev.mentors,{target,title}],
                    }));
    };
    return (
        <div>
            <h1>
                {person.name}은 {person.title}!
            </h1>
            <p>
                {person.name}의 멘토는 
                <ul>
                    {(person.mentors.map((mentor)=>(
                        <li key={mentor.id}>{mentor.name}</li>
                    )))}
                </ul>
            </p>
            <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
            <button onClick={handleDelete}>멘토 삭제하기</button>
            <button onClick={handleAdd}>멘토 추가하기</button>
        </div>
    );
}

const initialPerson={
    name:'minjeong',
    title:'developer',
    mentors:[{
        id:1,
        name:'elly',
        title:'senior developer'
    },{
        id:2,
        name:'hoho',
        title:'developer'
    }
]}