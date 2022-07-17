import React from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

function Votes({
    likes,
    dislikes,
    setLikes,
    setDisLikes,
    setComments,
    showComments,
}) {
    function handleLike() {
        setLikes(++likes);
    }
    function handleDisLike() {
        setDisLikes(++dislikes);
    }
    function handleComments() {
        setComments(!showComments);
    }
    return (
        <>
            <div>
                <button onClick={handleLike}>
                    {likes} <AiFillLike />
                </button>
                <button onClick={handleDisLike}>
                    {dislikes} <AiFillDislike />
                </button>
            </div>
            <button onClick={handleComments}>
                {showComments ? "Hide comments" : "Show Comments"}
            </button>
        </>
    );
}
export default Votes;
