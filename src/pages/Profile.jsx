import React from 'react';
import { Favorites, KeepReading, Sidebar, Topbar } from '../components';
import './Profile.css';

function Profile() {
  return (
    <section className="profile-container">
      <Sidebar />
      <section className="profile-content">
        <Topbar />
        <div className="profile-user-container">
          <h2>Seu Perfil</h2>

        </div>
        <Favorites />
        <KeepReading />
      </section>
    </section>
  );
}

export default Profile;
