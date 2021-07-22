import React, { useState, useEffect } from 'react';
import Task from './Task';
import './css/TodoList.css';
import firebase from "../fire";

const TodoList = ({user_id}) => {
    
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        const ref = firebase.database().ref("Todo list for: " + user_id);
        ref.on('value', (snapshot)=>{
          const tasks = snapshot.val();
          const list = [];
          for (let id in tasks){
            list.push({id, ...tasks[id]}); // object is: {id, title, complete}
          }
          setTodoList(list);
        })
      }, []);

    
    return (  
        <div className="TodoList" Style="">
            
            {todoList? todoList.map((e, index) => <Task todo={e} key={index} user_id={user_id}/>) : ""}
        
        </div>
    );
}
 
export default TodoList;
