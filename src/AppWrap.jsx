import React from 'react';

export default function AppWrap() {
    return (
        <div>
            <Navbar>
                <Avatar 
                    image='https://plus.unsplash.com/premium_photo-1680946468196-a53273b001b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
                    name='Minjeong'
                    size={200}
                />
                <p>안녕하세요, 민정입니다!</p>
            </Navbar>
        </div>
    );
}

function Navbar({children}){
    return (
        <header style={{backgroundColor:'beige'}}>
            {children}
        </header>
    );
}

function Avatar({image,name,size}){
    return(
      <div>
        <img 
            src={image}
            alt={`${name}`} 
            width={size}
            height={size}
            style={{borderRadius:'50%'}}    
        />
      </div>  
    );
}