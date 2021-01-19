/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import SeirenContext from '../context/SeirenContext';
import Logo from '../images/logo.png';
import './Login.css';

// mancoso@gmail.com.br
// ricks77

function Register() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const registerUrl = 'https://app.seirencomics.com.br/api/register';

  const registerFunc = () => console.log('ok');

  return (
    <div className="wrapper">
      <section className="login-container">
        <img src={ Logo } className="login-logo" alt="logo seiren" />
        <div className="field">
          <button type="button" className="google-btn">Login com Google</button>
          <hr />
          <input
            type="email"
            name="email"
            placeholder="meumelhoremail@gmail.com"
            className="field-login"
            onChange={ ({ target }) => setEmail(target.value) }
          />
          <input
            type="password"
            name="password"
            placeholder="Escolha sua senha"
            className="field-login"
            onChange={ ({ target }) => setPassword(target.value) }
          />
          <p>
            Nosso sistema requer que você tenha 18 anos ou mais para
            <br />
            entrar, confirme sua idade para completar seu cadastro
          </p>
          <input
            required
            type="checkbox"
            name="idade"
            id="idade"
            onClick={ () => setIsDisabled(false) }
          />
          <Link
            to="/"
          >
            <button
              className="login-btn"
              type="button"
              disabled={ isDisabled }
              onClick={ () => registerFunc() }
            >
              Criar Conta
            </button>
          </Link>
        </div>
        <Link to="/" id="signup-link">
          Já tem uma conta?
          {' '}
          <span>Entrar</span>
        </Link>
      </section>
    </div>
  );
}

export default Register;
