import React, { useState } from 'react';

function Profile({ user, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedBio, setEditedBio] = useState(user.bio);
  const [editedAvatar, setEditedAvatar] = useState(user.avatar);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(editedName, editedBio, editedAvatar); // Pass edited avatar data
    }
    setIsEditing(!isEditing);
  }

  return (
    <div>
      <h1>Profile</h1>
      <img src={editedAvatar} alt="User Avatar" />
      <p>Name: {isEditing ? (
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
      ) : (
        user.name
      )}</p>
      <p>Bio: {isEditing ? (
        <input
          type="text"
          value={editedBio}
          onChange={(e) => setEditedBio(e.target.value)}
        />
      ) : (
        user.bio
      )}</p>
      {/* Add an input field for updating the avatar */}
      <input
        type="text"
        value={editedAvatar}
        onChange={(e) => setEditedAvatar(e.target.value)}
      />
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </div>
  );
}

export default Profile;
