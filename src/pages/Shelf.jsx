/* eslint-disable no-magic-numbers */
import React, { useEffect, useState } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import Anchor from '../components/Anchor';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Banner from '../images/shelf-banner.png';
import './Shelf.css';
// import Highligths from '../components/Highligths';

function Shelf() {
  const [apiResponseState, setApiResponseState] = useState([]);
  const [numberCardNext, setNumberCardNext] = useState(5);
  const [numberCardInicial, setNumberCardInicial] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabledPrev, setIsDisabledPrev] = useState(true);
  const [max, setMax] = useState(0);
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  useEffect(() => {
    const fetchUrl = async () => {
      const apiRequest = await fetch(url);
      const apiResponse = await apiRequest.json();
      setApiResponseState(apiResponse.meals);
      setMax(apiResponse.length);
    };

    fetchUrl();
  }, []);

  const handleClickNext = () => {
    if (apiResponseState.length - 1 === numberCardNext) {
      setIsDisabled(true);
    }
    setNumberCardNext(numberCardNext + 1);
    setNumberCardInicial(numberCardInicial + 1);
    setIsDisabledPrev(false);
  };

  const handleClickPrev = () => {
    if (apiResponseState.length - 1 !== numberCardNext) {
      setIsDisabled(false);
    }
    if (numberCardInicial === 1) {
      setIsDisabledPrev(true);
    }
    setNumberCardNext(numberCardNext - 1);
    setNumberCardInicial(numberCardInicial - 1);
  };

  console.log(max, numberCardNext);

  return (
    <section className="shelf-container">
      <Sidebar />
      <section className="shelf-content">
        <Topbar />
        <img src={ Banner } alt="banner" id="shelf-banner" />
        <Anchor />
        {/* <Highligths api={ apiResponseState } /> */}
        <div className="highligths-list">
          <h2 className="shelf-h2">Destaques</h2>
          <div className="tales-container">
            {
              apiResponseState.slice(numberCardInicial, numberCardNext)
                .map((tales, id) => (
                  <div
                    key={ id }
                    className="tales-card"
                    style={ { backgroundImage: `url(${tales.strMealThumb})` } }
                  >
                    <p className="naoentendir">{tales.strMeal}</p>
                  </div>
                ))
            }
          </div>
          <button
            type="button"
            onClick={ handleClickPrev }
            disabled={ isDisabledPrev }
          >
            anterior

          </button>
          <button
            type="button"
            onClick={ handleClickNext }
            disabled={ isDisabled }
          >
            proximo

          </button>
        </div>
        <div className="highligths-list">
          <h2 className="shelf-h2">Continue Lendo</h2>
          <div className="tales-container">
            {
              apiResponseState.slice(numberCardInicial, numberCardNext)
                .map((tales, id) => (
                  <div
                    key={ id }
                    className="tales-card"
                    style={ { backgroundImage: `url(${tales.strMealThumb})` } }
                  >
                    <p className="naoentendir">{tales.strMeal}</p>
                  </div>
                ))
            }
          </div>
          <button
            type="button"
            onClick={ handleClickPrev }
            disabled={ isDisabledPrev }
          >
            anterior

          </button>
          <button
            type="button"
            onClick={ handleClickNext }
            disabled={ isDisabled }
          >
            proximo

          </button>
        </div>
        <div className="highligths-list">
          <h2 className="shelf-h2">Próximos Lançamento</h2>
          <div className="tales-container">
            {
              apiResponseState.slice(numberCardInicial, numberCardNext)
                .map((tales, id) => (
                  <div
                    key={ id }
                    className="tales-card"
                    style={ { backgroundImage: `url(${tales.strMealThumb})` } }
                  >
                    <p className="naoentendir">{tales.strMeal}</p>
                  </div>
                ))
            }
          </div>
          <button
            type="button"
            onClick={ handleClickPrev }
            disabled={ isDisabledPrev }
          >
            anterior

          </button>
          <button
            type="button"
            onClick={ handleClickNext }
            disabled={ isDisabled }
          >
            proximo

          </button>
        </div>
        <div className="highligths-list">
          <h2 className="shelf-h2">Séries</h2>
          <div className="tales-container">
            {
              apiResponseState.slice(numberCardInicial, numberCardNext)
                .map((tales, id) => (
                  <div
                    key={ id }
                    className="tales-card"
                    style={ { backgroundImage: `url(${tales.strMealThumb})` } }
                  >
                    <p className="naoentendir">{tales.strMeal}</p>
                  </div>
                ))
            }
          </div>
          <button
            type="button"
            onClick={ handleClickPrev }
            disabled={ isDisabledPrev }
          >
            anterior

          </button>
          <button
            type="button"
            onClick={ handleClickNext }
            disabled={ isDisabled }
          >
            proximo

          </button>
        </div>
      </section>
    </section>
  );
}

export default Shelf;
