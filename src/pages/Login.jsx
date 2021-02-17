import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import Logo from '../images/logo.png';
import logoGoogle from '../images/logo-google.png'
import './Login.css';

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState();

  const loginUrl = 'https://app.seirencomics.com.br/api/login';

  const loc = window.location.pathname;
  
  const myInit = {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    mode: 'cors',
    cache: 'default',
  };
  
  const fetchLogin = async () => {
    const apiRequest = await fetch(loginUrl, myInit);
    const apiResponse = await apiRequest.json();
    if (!apiResponse.error) {
      localStorage.setItem('login', JSON.stringify({
        login: true,
        token: apiResponse.access_token,
        user_id: apiResponse.user.id,
      }));
      setError(false);
      window.location.href = `${loc}`;
    } else {
      setError(true);
    }
    return apiResponse;
    };

    const responseGoogle = (response) => {
      console.log(response);
    }

  return (
    <div className="wrapper">
      <section className="login-container">
        <img src={ Logo } className="login-logo" alt="logo seiren" />
        <div className="field">
          <GoogleLogin
            clientId="218349872192-jk7b950drulmnf8g39q1b93e3iiu6h8p.apps.googleusercontent.com"
            render={renderProps => (
              <button 
                className="google-btn"
                onClick={renderProps.onClick} 
                disabled={renderProps.disabled}>
                  <img src={logoGoogle} alt="logo google" className="logo-google"/>
                  Login com Google</button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
          <hr />
          <input
            type="email"
            name="email"
            placeholder="meunome@gmail.com"
            className="field-login"
            onChange={ ({ target }) => setEmail(target.value) }
          />
          <input
            type="password"
            name="password"
            placeholder="Digíte sua senha"
            className="field-login"
            onChange={ ({ target }) => setPassword(target.value) }
          />
          {
            error ? <p>Login ou senha inválidos</p> : null
          }
          <Link to="/" id="forgot-password">Esqueceu sua senha?</Link>
          <Link
            to={ loc }
          >
            <button
              className="login-btn"
              type="button"
              onClick={ () => fetchLogin() }
            >
              Entrar
            </button>
          </Link>
        </div>
        <Link to="/cadastrar" id="signup-link">
          Ainda não tem uma conta?
          {' '}
          <span className="cadastre-se">Cadastre-se!</span>
        </Link>
      </section>
    </div>
  );
}

export default Login;
