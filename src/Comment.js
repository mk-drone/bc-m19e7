import React from 'react';

const Comment = ({text, votes, id, thumbUp, thumbDown, deleteComment}) => {
    return  (
        <li>
        {text}
        <span>votes: {votes}</span>
        <button onClick={()=>thumbUp(id)}>+</button>
        <button onClick={()=>thumbDown(id)}>-</button>
        <button onClick={()=>deleteComment(id)}>Remove</button>
        </li>
    );
}

export default Comment;
