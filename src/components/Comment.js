import React from "react";

function Comment({ comment }) {
    return (
        <div id={comment.id}>
            <h2>{comment.user}</h2>
            <p>{comment.comment}</p>
        </div>
    );
}

export default Comment;
