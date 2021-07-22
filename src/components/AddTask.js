import React, { useState, } from 'react';
import firebase from "../fire";

const AddTask = ({user_id}) => {

    const [title, setTitle] = useState("");
    const [taskCondition, setTaskCondition] = useState(false);
    
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleTaskCondition = () => {
        setTaskCondition(!taskCondition);
    };

    const createTodo = () => {
        const ref = firebase.database().ref("Todo list for: " + user_id);
        const newTask = {
            title,
            description:"",
            complete:taskCondition,
            
        };
        if (title.length > 0) {
            ref.push(newTask);
        }  
        setTitle(""); // clear the input field
    };


    return (
        <div className="Form">
            <input  
             type="text"
             onChange={handleTitleChange}
             value={title}
             placeholder="New Task"
             autoFocus></input> <h1 Style="display:inline;"></h1> 
                        <div Style="text-align:center;"> 
                        Task finished? 
                         <input type="checkbox" 
                         value={taskCondition}
                         Style="margin:-5px;"  
                         onChange={handleTaskCondition}></input> <br></br>
                        </div>
             <button name="addTaskBtn" onClick={createTodo}> <b> Add </b></button>
        </div>

    );
}

export default AddTask;