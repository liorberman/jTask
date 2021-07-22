import React, { useState, } from 'react';
import { Redirect } from 'react-router';
import firebase from "../fire";

const PassReset = ({setResetFlag}) => {
    
    const [email, setEmail] = useState("");
   
    
    const resetPassword = () => {
        firebase.auth().sendPasswordResetEmail(email)
        .then(()=>{
            alert("Password reset email sent");
            setResetFlag(false);
        })
        .catch((error) => {
            alert(error);
        });
    }
    
   return ( 
        <div className="PassReset">
            Email:<br></br> <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required autoFocus/>
            <br></br>
            <button onClick={resetPassword}> <b> Reset </b></button>
        </div>
     );
}
 
export default PassReset;