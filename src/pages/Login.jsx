import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import md5 from 'crypto-js/md5';
import SeirenContext from '../context/SeirenContext';
import Logo from '../images/logo.png';
import './Login.css';

function Login() {
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLogged } = useContext(SeirenContext);

  const handleValidateFields = () => {
    const minLength = 5;
    const validateFields = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    && password.length > minLength;
    return validateFields;
  };

  const handleChangeEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handleChangePassword = ({ target: { value } }) => {
    setPassword(value);
    if (handleValidateFields()) setIsValid(true);
  };

  const setLocalStorage = () => {
    const user = { email };
    localStorage.setItem('user', JSON.stringify(md5(user)));
    localStorage.setItem(md5('isLogged'), JSON.stringify(md5(true)));
    window.location.reload();
  };

  return (
    !isLogged ? (
      <div className="wrapper">
        <section className="login-container">
          <img src={ Logo } className="login-logo" alt="logo seiren" />
          <div className="field">
            <button type="button" className="google-btn">Login com Google</button>
            <span className="or-span">----- ou -----</span>
            <input
              type="email"
              name="email"
              onChange={ handleChangeEmail }
              placeholder="meunome@gmail.com"
              className="field-login"
            />
            <input
              type="password"
              name="password"
              onChange={ handleChangePassword }
              placeholder="Digíte sua senha"
              className="field-login"
            />
            <Link to="/" id="forgot-password">Esqueceu sua senha?</Link>
            <Link
              to="/estante"
            >
              <button
                className="login-btn"
                type="button"
                disabled={ !isValid }
                onClick={ setLocalStorage }
              >
                Entrar
              </button>
            </Link>
          </div>
          <Link to="/">
            Ainda não tem uma conta?
            {' '}
            <span>Cadastre-se!</span>
          </Link>
        </section>
      </div>
    )
      : <Redirect to="/estante" />
  );
}

export default Login;
