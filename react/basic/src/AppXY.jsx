import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
    // const [x,setX]=useState(0);
    // const [y,setY]=useState(0);
    const [position,setPosition]=useState({x:0,y:0});
    return (
        <div className='container' onPointerMove={(event)=>{
            //객체 상태 업데이트하기

            //1. 동일 카테고리 데이터 묶지 않은 버전
            // console.log(event.clientX,event.clientY);
            // setX(event.clientX);
            // setY(event.clientY);

            //2.동일 카테고리 데이터 묶은 버전
            // setPosition({x:event.clientX,y:event.clientY});

            //2-1.수평으로만 이동하도록
            setPosition((prev)=>({...prev, x:event.clientX})); //()=>({객체임을 나타내기 위해 필요})

        }}>
            <div className='pointer' style={{transform:`translate(${position.x}px, ${position.y}px)`}}/>
        </div>
    );
}

