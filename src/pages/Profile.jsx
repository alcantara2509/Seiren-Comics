/* eslint-disable react/jsx-max-depth */
/* eslint-disable camelcase */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Favorites, Footer, Sidebar, Topbar } from '../components';
import ChangeAvatar from '../components/ChangeAvatar';
import SeirenContext from '../context/SeirenContext';
import Login from './Login';
import './Profile.css';

function Profile() {
  const { searchInput,
    apiResponseProfile,
    isFetchingProfile,
   } = useContext(SeirenContext);
   const [redirect, setRedirect] = useState(false);

  const avatarSrc = 'https://blog.nebrass.fr/wp-content/uploads/Homer-Simpson-4-200x200.jpg';
  const inds = ['name@gmail.com', 'name@gmail.com', 'name@gmail.com'];
  const [seen, setSeen] = useState(false);
  const [nickname, setNickname] = useState('');
  const [old_password, setOld_password] = useState('');
  const [password, setPassword] = useState('');

  const togglePop = () => {
    setSeen(!seen);
  };

  const editNickname = () => {
    const getId = () => {
      const userId = JSON.parse(localStorage.getItem('login'));
      if (userId !== null) {
        return userId.user_id;
      }
    };

    const editProfileUrl = `http://localhost:8000/api/user/edit/${getId()}`;

    const getToken = () => {
      const lstore = JSON.parse(localStorage.getItem('login'));
      if (lstore !== null) {
        return lstore.token;
      }
    };

    const myHeaders = new Headers({
      Authorization: `Bearer${getToken()}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });

    const myInitEdit = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ nickname, old_password, password }),
      mode: 'cors',
      cache: 'default',
    };

    const fetchUrlProfileEdit = async () => {
      const apiRequestProfileEdit = await fetch(editProfileUrl, myInitEdit);
      const apiResponseProfileEdit = await apiRequestProfileEdit.json();
      const arrApiResponseProfileEdit = Object.values(apiResponseProfileEdit);
      return arrApiResponseProfileEdit;
    };
    fetchUrlProfileEdit();

    alert('Alterado com sucesso!');

    setNickname('');

    window.location.reload();
  };

  useEffect(() => {
    const store = localStorage.getItem('login');
    if (store !== null) setRedirect(true);
  }, []);

  return (
    redirect ?
    <div>
      <section className="profile-container">
            <Sidebar />
            <section className="profile-content">
              <Topbar />
              <div className="profile-user-container">
                <h2>Seu Perfil</h2>
                <section className="profile-settings">
                  <div className="avatar-container">
                    <img src={ avatarSrc } alt="Profile avatar" id="profile-avatar" />
                    <button
                      type="button"
                      className="change-avatar"
                      onClick={ togglePop }
                    >
                      Trocar avatar

                    </button>
                  </div>
                  <div className="user-name-container">
                    <h4 className="input-label">Nome de Usuário</h4>
                    <input
                      type="text"
                      className="profile-input"
                      value={ nickname }
                      onChange={ ({ target: { value } }) => setNickname(value) }
                    />
                    <div className="profile-btn-container">
                      <button
                        type="button"
                        className="profile-btn"
                        onClick={ () => editNickname() }
                      >
                        Alterar Nome
                      </button>
                    </div>
                    <div className="supp-contact">
                      <p className="supp-line"> Está com algum problema?</p>
                      <Link
                        to="/"
                        className="supp-line"
                        id="supp-link"
                      >
                        Contate o suporte

                      </Link>
                    </div>
                  </div>
                  <div className="password-container">
                    <h4 className="input-label">Senha atual</h4>
                    <input
                      type="password"
                      className="profile-input"
                      onChange={ ({ target: { value } }) => setOld_password(value) }
                    />
                    <h4 className="input-label" id="new-password">Nova senha</h4>
                    <input
                      type="password"
                      className="profile-input"
                      onChange={ ({ target: { value } }) => setPassword(value) }
                    />
                    <div className="profile-btn-container">
                      <button
                        type="button"
                        className="profile-btn"
                        onClick={ () => editNickname() }
                      >
                        Alterar Senha
                      </button>
                    </div>
                  </div>
                  <div className="ind-container">
                    <h4>Suas Indicações</h4>
                    <div className="ind-wrap">
                      {
                        inds.map((ind, id) => <li key={ id } className="inds">{ind}</li>)
                      }
                    </div>
                  </div>
                  <div className="sub-container">
                    <h4>Sua assinatura</h4>
                    <div className="sub-itens">
                      <div className="plan-conteiner">
                        <p className="sub-p">Standart</p>
                        <div className="value-container">
                          <h5 id="sub-h5">$</h5>
                          <h1 id="sub-h1">39.90</h1>
                        </div>
                      </div>
                      <div>
                        <p className="sub-p">mudar plano</p>
                        <p className="sub-p" id="mid-p">suspender plano</p>
                        <p className="sub-p" id="cancel-p">cancelar plano</p>
                      </div>
                    </div>
                  </div>
                  <div className="supp-contact-mobile">
                      <p className="supp-line"> Está com algum problema?</p>
                      <Link
                        to="/"
                        className="supp-line"
                        id="supp-link"
                      >
                        Contate o suporte

                      </Link>
                  </div>
                </section>

              </div>
              <div id="slider-anchor">
                <Favorites />
              </div>
              {/* <KeepReading /> */}
              <div style={{height: '140px'}}></div>
              <Footer />
            </section>
            {
              seen ? <ChangeAvatar toggle={ togglePop } /> : null
            }
      </section>
    </div>
  : <Login /> );
}

export default Profile;
