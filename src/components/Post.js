import { useParams } from 'react-router-dom';
import React, { useState } from 'react';

function Post({ posts, onEdit, onDelete, onLike, onDislike }) {
    const [isEditing, setIsEditing] = useState(false);
    let { postId } = useParams();
    const post = posts.find((post) => post.id === Number(postId));
    const [editedText, setEditedText] = useState(post.text);

    if (!post) {
        return <div>{postId}</div>;
    }

    const handleEdit = () => {
        if (isEditing) {
            onEdit(post.id, editedText);
        }
        setIsEditing(!isEditing);
    };

    const handleDelete = () => {
        onDelete(post.id)
    };

    const handleLike = () => {
        onLike(post.id);
    };

    const handleDislike = () => {
        onDislike(post.id);
    };

    return (
        <div>
            <h1>Single Post</h1>
            <p>ID: {post.id}</p>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                    />

                </div>
            ) : (
                <p>Text: {post.text}</p>
            )}
            <p>Likes: {post.likes}</p>
            <p>Dislikes: {post.dislikes}</p>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleDislike}>Dislike</button>
        </div>
    );
}

export default Post;