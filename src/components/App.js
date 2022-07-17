import video from "../data/video.js";
import React, { useState } from "react";
import Header from "./Header";
import Comments from "./Comments";
import Votes from "./Votes";
function App() {
    const [likes, setLikes] = useState(video.upvotes);
    const [dislikes, setDisLikes] = useState(video.downvotes);
    const [showComments, setShowComments] = useState(true);
    return (
        <div className="App">
            <iframe
                src={video.embedUrl}
                frameBorder="0"
                title="Thinking in React"
            />
            <Header
                title={video.title}
                views={video.views}
                date={video.createdAt}
            />
            <Votes
                likes={likes}
                dislikes={dislikes}
                setLikes={setLikes}
                setDisLikes={setDisLikes}
                setComments={setShowComments}
                showComments={showComments}
            />
            {showComments ? <Comments comments={video.comments} /> : " "}
        </div>
    );
}

export default App;
