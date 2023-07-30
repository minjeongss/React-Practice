import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import AppProfile from './AppProfile';
//import AppCounter from './AppCounter';
//import AppProducts from './AppProducts';
//import AppXY from './AppXY';
//import AppMentor from './AppMentor';
//import AppMentors from './AppMentors';
//import AppMentorsImmer from './AppMentorsImmer';
//import AppForm from './AppForm';
//import AppWrap from './AppWrap';
//import AppCard from './AppCard';
import AppTheme from './AppTheme';

//실제 리액트 사용의 시작
//사용자의 입장에서,
//index.html의 body에 root만 존재함
//index.js에서 root를 받아와서 root라는 가상의 요소 생성
//App이라는 component를 연결해준 것임
//*실제 UI는 App.js에서 생성됨
const root = ReactDOM.createRoot(document.getElementById('root')); //root가져오기

//rendering
//엄격한 개발 환경 구축을 위해 <App>이 감싸져있음
//실제 첫 번째 랜더링은 App임
root.render(
  <React.StrictMode>
    <AppTheme />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
