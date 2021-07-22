import React from 'react';
import AddTask from './AddTask';
import TodoList from './TodoList';
import {Redirect} from 'react-router-dom';
import firebase from "../fire";


const HomePage = ({handleLogout, user_id}) => {
    
    const handleDeleteUser = () => {
        firebase.database().ref(user_id).remove(); // delete the user's database
        firebase.auth().currentUser.delete()
        .then(()=>{alert("User deleted successfully")})
        .catch((error)=>{alert(error)}); // delete the user 
        }
    
    if (user_id == null){
        return (
            <Redirect to="/"/>
        );
    }
    else {
        return (
            <div className="HomePage" Style="text-align:center; margin:auto;">
                <button onClick={handleLogout} Style="position:absolute;height:25px;right:210px;top:25px;"> <b> Logout </b></button>
                <button onClick={handleDeleteUser} Style="position:absolute;height:25px;right:60px;width:125px;top:25px;color:red;"> <b> Delete User </b></button>
                <h2> Home </h2>
                <h3> <i> To Do: </i> </h3>
                <TodoList user_id={user_id}/>
                <AddTask user_id={user_id}/>
            </div>  
        );
    }
   
};
 
export default HomePage;