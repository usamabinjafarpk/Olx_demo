import React, { useState,useContext } from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';
import { useHistory } from 'react-router-dom';



export default function Signup() {
  const history = useHistory()
  const [username,setUsername]=useState('');
const [email,setEmail]=useState('');
const [number,setNumber]=useState('');
const [password,setPassword]=useState('');
const {firebase} = useContext(FirebaseContext)


const handleSubmit =(e)=>{
  e.preventDefault()
  
  console.log(username)
  firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
    result.user.updateProfile({displayName:username}).then(()=>{
      firebase.firestore().collection('users').add({
        id:result.user.uid,
        username:username,
        phone:number,
        password:password
      }).then(()=>{
          history.push('/login')
      })
    })
  })
}

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="image"/>
        <form onSubmit={handleSubmit} >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={number}
            onChange={(e)=>setNumber(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue=""
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
