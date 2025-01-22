import React, { useState } from "react";

const CommentSection = ({ postId, comments, handleComment }) => {
    const [newComment, setNewComment] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();
        handleComment(postId, newComment);
        setNewComment("");
    };

    return (
        <div className="comment-section">
            <h4>Comments</h4>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CommentSection;