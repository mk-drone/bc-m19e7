import React from 'react';
import Comment from './CommentContainer';


const CommentsList = ({comments, addComment}) => {
    let input;
    return (
        <div>
            <input id='new-commment' placeholder="enter comment" ref={node => {input = node}}/>
            <button onClick={(e)=>{
                e.preventDefault()
                addComment(input.value);
            }}> Add Comment</button>
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
