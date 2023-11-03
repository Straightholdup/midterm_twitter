import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Feed from './components/Feed';
import Post from './components/Post';
import Navigation from './components/Navigation'; // Import the Navigation component
import React, { useState } from 'react';



function App() {
  const [postIdCounter, setPostIdCounter] = useState(3);
  const [userData, setUserData] = useState({
    id: 1,
    name: 'Naruto',
    bio: 'Ninja of Konoha',
    avatar: 'https://images.immediate.co.uk/production/volatile/sites/3/2023/04/naruto-762b09d.jpg',
  });
  const [posts, setPosts] = useState([
    { id: 1, user_id: 1, text: 'I will become hokage!', likes: 5, dislikes: 5 },
    { id: 2, user_id: 1, text: 'I became Hokage!', likes: 10, dislikes: 10 },
  ]);

  const addPost = (newPost) => {
    newPost['id'] = postIdCounter;
    setPosts([...posts, newPost]);
    setPostIdCounter(postIdCounter + 1);
  };

  const editProfile = (name, bio, avatar) => {
    setUserData({
      ...userData,
      name,
      bio,
      avatar,
    });
  };

  const editPost = (postId, newText) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, text: newText } : post
    );
    setPosts(updatedPosts);
  };

  const deletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const likePost = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const dislikePost = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, dislikes: post.dislikes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Feed posts={posts} addPost={addPost} />} />
        <Route
          path="/post/:postId"
          element={
            <Post
              posts={posts}
              onEdit={editPost}
              onDelete={deletePost}
              onLike={likePost}
              onDislike={dislikePost}
            />
          }
        />
        <Route
          path="/profile"
          element={<Profile user={userData} onEdit={editProfile} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
