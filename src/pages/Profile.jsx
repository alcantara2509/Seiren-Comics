import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './Profile.css';

function Profile() {
  return (
    <section className="profile-container">
      <Sidebar />
      <section className="profile-content">
        <Topbar />
        <h1>Profile</h1>
      </section>
    </section>
  );
}

export default Profile;
