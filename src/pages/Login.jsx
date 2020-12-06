/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import md5 from 'crypto-js/md5';
import SeirenContext from '../context/SeirenContext';
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
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem(md5('isLogged'), JSON.stringify(md5(true)));
    window.location.reload();
  };

  return (
    !isLogged
      ? <div className="wrapper">
        <div className="title">
          Cook APP
        </div>
        <div className="field">
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ handleChangeEmail }
            placeholder="email"
          />
        </div>
        <div className="field">
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ handleChangePassword }
            placeholder="senha"
          />
        </div>
        <div className="field">
          <Link to="/estante">
            <input
              type="submit"
              data-testid="login-submit-btn"
              disabled={ !isValid }
              onClick={ setLocalStorage }
            />
          </Link>
        </div>
        <div className="content">
          <div className="checkbox">
            <input type="checkbox" id="remember-me" />
            Lembrar senha
          </div>
        </div>
      </div>
      : <Redirect to="/estante" />
  );
}

export default Login;
