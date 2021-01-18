import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SeirenContext from '../context/SeirenContext';
import Logo from '../images/logo.png';
import './Login.css';

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState();

  const { setIsLogged } = useContext(SeirenContext);

  const loginUrl = 'https://app.seirencomics.com.br/api/login';

  const loc = window.location.pathname;
  console.log(loc);

  const loginFunc = () => {
    console.log(true);
    fetch(loginUrl, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        response.json()
          .then((result) => {
            if (!result.error) {
              sessionStorage.setItem('login', JSON.stringify({
                login: true,
                token: result.access_token,
                user_id: result.user.id,
              }));
              setError(false);
              window.location.href = `${loc}`;
            } else {
              setError(true);
            }
            setIsLogged(result);
          });
      });
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
            to="/"
          >
            <button
              className="login-btn"
              type="button"
              onClick={ () => loginFunc() }
            >
              Entrar
            </button>
          </Link>
        </div>
        <Link to="/" id="signup-link">
          Ainda não tem uma conta?
          {' '}
          <span>Cadastre-se!</span>
        </Link>
      </section>
    </div>
  );
}

export default Login;
