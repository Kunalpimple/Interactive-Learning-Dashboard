import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Import user icon
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState({
    username: 'john_doe',
    email: 'john@example.com',
    bio: 'This is a short bio about John Doe.',
    profilePicture: '', // Initial state with no profile picture
    recentActivities: [
      'Completed the "Introduction to React" course.',
      'Joined the "Advanced JavaScript" group.',
      'Posted a new article on "Modern Web Development".',
    ],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editDetails, setEditDetails] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setUser(editDetails);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditDetails({ ...user });
    setIsEditing(false);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setEditDetails((prevDetails) => ({
        ...prevDetails,
        profilePicture: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h2>My Profile</h2>
      </div>
      <div className="profile-content">
        <div className="profile-picture">
          {user.profilePicture ? (
            <img src={user.profilePicture} alt="Profile" />
          ) : (
            <FaUserCircle className="user-icon" />
          )}
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="file-input"
            />
          )}
        </div>
        <div className="profile-details">
          {isEditing ? (
            <>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={editDetails.username}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={editDetails.email}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="bio">Bio:</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={editDetails.bio}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="button-group">
                <button className="save-button" onClick={handleSave}>Save</button>
                <button className="cancel-button" onClick={handleCancel}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Bio:</strong> {user.bio}</p>
              <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Profile</button>
            </>
          )}
        </div>
        <div className="recent-activities">
          <h3>Recent Activities</h3>
          <ul>
            {user.recentActivities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
