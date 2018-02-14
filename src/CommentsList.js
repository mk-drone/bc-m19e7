import React from 'react';
import Comment from './CommentContainer';


const CommentsList = ({comments, addComment}) => {
    return (
        <div>
            <input id='new-commment' placeholder="enter comment" />
            <button onClick={(e)=>{
                    console.log(document.getElementById('new-comment'));
                    addComment(document.getElementById('new-comment').value);

            }}> asd</button>
            <ul>
            {
                comments.map(comment=>{
                    return (<Comment key={comment.id} {...comment}/>);
                })
            }
            </ul>
        </div>
    );
}

export default CommentsList;
