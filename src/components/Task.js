import React, { useState } from 'react';
import firebase from "../fire";
import './css/Task.css';
import Description from './Description';

const Task = ({todo, user_id}) => {
    
    const [showDescription, setShowDescription] = useState(false);

    const handleDescription = () => {
        setShowDescription(!showDescription);
    }

    const deleteTask = () => {
        const cref = firebase.database().ref("Todo list for: " + user_id).child(todo.id);
        cref.remove();
    };

    const completeTask = () => {
        const cref = firebase.database().ref("Todo list for: " + user_id).child(todo.id);
        cref.update(
            {
                complete: !todo.complete
            }
        );
    };

    return (
        <div className="Task">
             <h4 className={todo.complete ? "task_complete" : "task_incomplete"} onClick={handleDescription}> 
                {todo.title} {showDescription ? <span> &#128316;</span> : <span>&#128317;</span>}
              </h4>
             {showDescription ? (<Description user_id={user_id} todo={todo}/>) : (null)}
             <button onClick={completeTask}> Complete </button>
             <button onClick={deleteTask}> Delete </button>
             <br></br>
        </div>
    );
}

export default Task;