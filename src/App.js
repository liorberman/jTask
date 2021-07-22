import React, { useState, useEffect, } from 'react';
import fire from './fire';
import Login from './components/Login.js';
import './App.css';
import HomePage from './components/HomePage.js';


function App() {
  const [user,setUser] = useState(true);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [emailError,setEmailError] = useState("");
  const [passwordError,setPasswordError] = useState("");
  const [hasAccount,setHasAccount] = useState(true);
  
  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch( (err) => {
          switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message); 
              break;
          }
      } );
  }

  const handleLogout = () =>{
    fire
      .auth().signOut();
  }

  const handleSignup = () =>{
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch( (err) =>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/email-already-in-use":
               setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });
  }

  const clearInputs = () => {
    setEmail("")
    setPassword("")
  }

  const clearErrors = () => {
    setEmailError("")
    setPasswordError("")
  }

  const authListener = () => {
        fire
      .auth()
      .onAuthStateChanged( (user) =>{
        if(user){
          clearInputs()
          setUser(user)        
        }
        else{
          setUser("")
        }
      })
  }

  useEffect( () =>{
    authListener();
  },[])

  return (
    <div className="App">
      <h1> <b> ✅ jTask </b> </h1>
      {
        user?( // if logged in, goto homepage. if not, go to login/signup
          <HomePage handleLogout={handleLogout} user_id={user.uid}/>
        ):(
        <Login                    //sending parameters
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            emailError={emailError}
            setEmailError={setEmailError}
            passwordError={passwordError}
            setPasswordError={setPasswordError}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
          />
        )
      } 
    </div>
  );
}

export default App;