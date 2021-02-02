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
  const [age_verification] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);

  const registerUrl = 'https://app.seirencomics.com.br/api/register';

  const myInit = {
    method: 'POST',
    body: JSON.stringify({ email, password, age_verification }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    mode: 'cors',
    cache: 'default',
  };
  
  const fetchLogin = async () => {
    const apiRequest = await fetch(registerUrl, myInit);
    const apiResponse = await apiRequest.json();
    console.log(apiResponse);
    return apiResponse;
    };

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
          <p className="termos-18">
            Nosso sistema requer que você tenha 18 anos ou mais para
            <br />
            entrar, confirme sua idade para completar seu cadastro
          </p>
          <label htmlFor="idade" className="confirm-18">
          <input
            required
            type="checkbox"
            name="idade"
            id="idade"
            onClick={ () => setIsDisabled(false) }
          />
            Confirmo que sou maior de 18 anos</label>
          <Link
            to="/login"
          >
            <button
              className="login-btn"
              type="button"
              disabled={ isDisabled }
              onClick={ () => fetchLogin() }
            >
              Criar Conta
            </button>
          </Link>
        </div>
        <Link to="/" id="signup-link">
          Já tem uma conta?
          {' '}
          <span className="cadastre-se">Entrar</span>
        </Link>
      </section>
    </div>
  );
}

export default Register;
