import React, { useState } from 'react';

//form 사용법
//: uncontrolled component
//리액트의 값 변화와 다른 방향성을 가지고 있음.
//리액트: UI update는 상태 변화로부터 이루어짐
//form: UI update가 즉각적으로 이루어짐
//고로 useState를 이용해 상태 변화 동기화가 필요함.


export default function AppForm() {
    //상태 관리: 개별적
    //const [name,setName]=useState('');
    //const [email,setEmail]=useState('');

    //상태 관리: 객체
    const [form, setForm]=useState({name:'',email:''});
    const handleSubmit=(e)=>{
        e.preventDefault(); //페이지 자동 새로고침 방지
        console.log(form);
    };
    const handleChange=(e)=>{ //설정 통일된 형태로 정리
        const {name,value}=e.target;
        setForm({...form,[name]:value});
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">이름: </label>
            <input 
                type="text" 
                id='name' name='name' 
                value={form.name} onChange={handleChange}/>
            <label htmlFor="email">이메일: </label>
            <input 
                type="email" 
                id='email' name='email'
                value={form.email} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    );
}

