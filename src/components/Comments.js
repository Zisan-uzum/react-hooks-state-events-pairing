import React from "react";
import Comment from "./Comment";

function Comments({ comments }) {
    return comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
    });
}

export default Comments;
