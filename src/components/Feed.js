import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component

function Feed({ posts, addPost }) {
    const [newPostText, setNewPostText] = useState('');

    const handleAddPost = () => {
        if (newPostText.trim() !== '') {
            addPost({
                user_id: 1,
                text: newPostText,
                likes: 0,
                dislikes: 0,
            });
            setNewPostText('');
        }
    }
    return (
        <div>
            <h1>Feed</h1>
            <input
                type="text"
                placeholder="What's on your mind?"
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
            />
            <button onClick={handleAddPost}>Post</button>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>
                            User ID: {post.user_id}, Text: {post.text}, Likes: {post.likes}, Dislikes: {post.dislikes}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Feed;