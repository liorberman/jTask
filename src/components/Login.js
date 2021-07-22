import React, { useState } from 'react';
import './css/Login.css'
import PassReset from './PassReset'

const  Login = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        hasAccount,
        setHasAccount,
    } = props;

    const [resetFlag, setResetFlag] = useState(false);

    const resetPassword = () => {
        setResetFlag(true);
    };

    if (resetFlag) {
        return <PassReset setResetFlag={setResetFlag}/>;
    }
    else {
        return (
            <div>
             <div className="login">
                    <label>Email</label> <br></br>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required autoFocus/>
                    <p>{<h3>{emailError}</h3>}</p>

                    <label>Password</label> <br></br>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                    <p>{<h3>{passwordError}</h3>}</p>
                
                    <div className="btnContainer">
                    {hasAccount? ( 
                        <>
                            <button onClick={handleLogin}>Login</button>
                            <p>Dont have an account? 
                                <span onClick={()=>setHasAccount(!hasAccount)}> Signup </span>
                            </p>
                        </>
                        ):(
                        <>
                            <button onClick={handleSignup}>Signup</button>
                            <p>Have an account? 
                                <span onClick={() => setHasAccount(!hasAccount)}> Login </span>
                            </p>
                        </>
                        )}
                        <p> Forgot your password? 
                        <span onClick={() => resetPassword()} Style="color:red;"> Reset </span>
                    </p>
                </div>
            </div>      
        </div>);
    }
   
}

export default Login;