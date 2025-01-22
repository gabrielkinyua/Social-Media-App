import React from "react";

const Feed = ({ posts, handleLike }) => {
  return (
    <div className="feed">
      {posts.map((post) => (
        <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => handleLike(post.id)}>
              Like ({post.likes})
              </button>
        </div>
        ))}
    </div>
    );
};   

export default Feed;