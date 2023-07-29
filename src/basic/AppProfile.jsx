import './App.css';
import Avatar from './components/Avatar';
import Profile from './components/Profile';

function AppProfile() {
  const handleClick=(event) => {
    console.log(event);
    alert('버튼이 클릭됨!');
  };
  return(
    <>
      <button onClick={handleClick}>버튼</button>
      <form onSubmit={()=>{}}>
          <input/>
      </form>
      <Profile image='https://plus.unsplash.com/premium_photo-1680946468196-a53273b001b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
        name='Minjeong Kim' 
        title='프론트엔드 개발자' 
        isNew={true}
      />
      <Profile image='https://plus.unsplash.com/premium_photo-1680946468196-a53273b001b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
        name='Minjeong Kim' 
        title='프론트엔드 개발자' 
      />
      <Profile image='https://plus.unsplash.com/premium_photo-1680946468196-a53273b001b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
        name='Minjeong Kim' 
        title='프론트엔드 개발자'
      />
      <Avatar image='https://plus.unsplash.com/premium_photo-1680946468196-a53273b001b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
        isNew={true}
      />

    </>
  );
}

export default AppProfile;
