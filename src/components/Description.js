import React, { useEffect, useState } from 'react';
import firebase from "../fire";
import './css/Description.css'

const Description = ({todo, user_id}) => {
    
    const [descriptionText, setDescriptionText] = useState(todo.description);

    const handleDescriptionChange = (e) => {
        setDescriptionText(e.target.value);
    }

    useEffect(() => {
        const ref = firebase.database().ref("Todo list for: " + user_id).child(todo.id);
        ref.update({description:descriptionText});
        }
    , [descriptionText]);
    
    return ( 
        <div className="Description">
            <textarea placeholder="Write task description" 
            value={descriptionText} 
            onChange={handleDescriptionChange}
            autoFocus>
            </textarea>
        </div>
     );
}
 
export default Description;