import React from 'react';
import { Link } from 'react-router-dom';
import { Favorites, KeepReading, Sidebar, Topbar } from '../components';
import './Profile.css';

function Profile() {
  const avatarSrc = 'https://blog.nebrass.fr/wp-content/uploads/Homer-Simpson-4-200x200.jpg';

  return (
    <section className="profile-container">
      <Sidebar />
      <section className="profile-content">
        <Topbar />
        <div className="profile-user-container">
          <h2>Seu Perfil</h2>
          <section className="profile-settings">
            <div className="avatar-container">
              <img src={ avatarSrc } alt="Profile avatar" id="profile-avatar" />
              <Link to="/" className="change-avatar">Trocar avatar</Link>
            </div>
            <div className="user-name-container">
              <h4>Nome de Usuário</h4>
              <input type="text" className="profile-input" />
              <button type="button">Alterar Nome</button>
              <div>
                <p> Está com algum problema?</p>
                <Link to="/">Contate o suporte</Link>
              </div>
            </div>
            <div className="password-container">
              <h4>Senha atual</h4>
              <input type="text" className="profile-input" />
              <h4>Nova senha</h4>
              <input type="text" className="profile-input" />
              <button type="button">Trocar Senha</button>

            </div>
          </section>
        </div>
        <Favorites />
        <KeepReading />
      </section>
    </section>
  );
}

export default Profile;
