import React, { useState } from 'react';

export default function Counter({total,onClick}) {
    //변경되는 값을 state에 저장하기
    //내부 상태는 userState를 이용해 관리됨
    //setCOunt의 변경으로 다시 함수 호출이 되어도 state에서 기억함
    const [count,setCount]=useState(0);
    return (
        <div className='counter'>
            <p className='number'>{count} <span className='total'>/{total}</span></p>
            <button className='button' onClick={() => {
                setCount((prev)=>prev+1);
                onClick();
            }}>Add +</button>
        </div>
    );
}