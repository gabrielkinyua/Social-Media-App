import React from "react";
import CommentSection from "./CommentSection";

const Feed = ({ posts, handleLike, handleComment }) => {
  return (
    <div className="feed">
      {posts.map((post) => (
        <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => handleLike(post.id)}>
              Like ({post.likes})
              </button>
              <CommentSection 
              postId={post.id} 
              comments={post.comments}
              handleComment={handleComment}
              />
        </div>
        ))}
    </div>
    );
};   

export default Feed;