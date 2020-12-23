/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Favorites, Footer, KeepReading, Sidebar, Topbar } from '../components';
import ChangeAvatar from '../components/ChangeAvatar';
import Search from '../components/Search';
import SeirenContext from '../context/SeirenContext';
import Banner from '../images/shelf-banner.png';
import './Profile.css';

function Profile() {
  const { searchInput,
    apiResponseProfile,
    isFetchingProfile } = useContext(SeirenContext);

    console.log(apiResponseProfile, isFetchingProfile);

  const avatarSrc = 'https://blog.nebrass.fr/wp-content/uploads/Homer-Simpson-4-200x200.jpg';
  const inds = ['name@gmail.com', 'name@gmail.com', 'name@gmail.com',
    'name@gmail.com', 'name@gmail.com', 'name@gmail.com',
    'name@gmail.com', 'name@gmail.com', 'name@gmail.com',
    'name@gmail.com', 'name@gmail.com', 'name@gmail.com'];
  const [seen, setSeen] = useState(false);

  const togglePop = () => {
    setSeen(!seen);
  };

  const renderSearch = () => (
    <section className="shelf-container">
      <Sidebar />
      <section className="shelf-content">
        <Topbar />
        <img src={ Banner } alt="banner" id="shelf-banner" />
        <div id="slider-anchor">
          <Search />
        </div>
        <h3 className="seiren-comunity-h3">Comunidade Seiren</h3>
        <section className="seiren-comunity">
          <section className="publicated-pages">
            <h5 className="seiren-comunity-h5">Páginas Publicadas</h5>
            <h1 className="seiren-comunity-h1">57345</h1>
          </section>
          <section className="online-users">
            <h5 className="seiren-comunity-h5">Usuários Online</h5>
            <h1 className="seiren-comunity-h1">345</h1>
          </section>
        </section>
        <Footer />
      </section>
    </section>
  );

  return (
    <div>
      {
        searchInput !== ''
          ? renderSearch()
          : <section className="profile-container">
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
                    <h4>Nome de Usuário</h4>
                    <input type="text" className="profile-input" />
                    <div className="profile-btn-container">
                      <button type="button" className="profile-btn">Alterar Nome</button>
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
                    <h4>Senha atual</h4>
                    <input type="password" className="profile-input" />
                    <h4>Nova senha</h4>
                    <input type="password" className="profile-input" />
                    <div className="profile-btn-container">
                      <button type="button" className="profile-btn">Trocar Senha</button>
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
                </section>

              </div>
              <Favorites />
              <KeepReading />
            </section>
            {
              seen ? <ChangeAvatar toggle={ togglePop } /> : null
            }
            </section>
      }
    </div>
  );
}

export default Profile;
