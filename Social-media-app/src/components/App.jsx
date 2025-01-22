import './App.css'
import ProfileHeader from './ProfileHeader.jsx';
import Feed from './Feed.jsx';
import React, { useState } from 'react';

const App = () => {
    const user = {
        name: 'Gabriel Kinyua',
        bio: 'Hello, I am a juniour developer',
        pfp: 'https://media.gettyimages.com/id/893173110/photo/the-post-washington-dc-premiere.jpg?b=1&s=594x594&w=0&k=20&c=V7Y7bS-C4GlUwfBdoAbPmF4D0CiJxBrsFaQDIAKNZD0='
    };

    const [notifications, setNotifications] = useState(0);

    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'Hello, World!',
            content: 'This is my first post on this social media platform.',
            likes: 0
        },
        {
            id: 2,
            title: 'Hello, Again!',
            content: 'This is my second post on this social media platform.',
            likes: 0
        }
    ]);

    const handleLike = (postId) => {
        setPosts(posts.map(post =>
            post.id === postId ? { ...post, likes: post.likes + 1 } : post
        ));
        setNotifications(notifications + 1);   
    };
    
    return (
        <div className="app">
            <div className="notifications">
                Notifications: {notifications}
            </div>
            <ProfileHeader user={user} />
            <Feed posts={posts} handleLike={handleLike} />
        </div>
    );
};    

export default App
