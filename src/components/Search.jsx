/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-magic-numbers */
import React, { useEffect, useState, useContext } from 'react';
import './Search.scss';
import { useMediaQuery } from 'react-responsive';
import SeirenContext from '../context/SeirenContext';

function Search() {
  const [apiResponseState, setApiResponseState] = useState([]);
  const [x, setX] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const { searchInput } = useContext(SeirenContext);

  const isWide = useMediaQuery({ query: '(min-width: 1800px)' });

  useEffect(() => {
    setIsFetching(true);
    const fetchUrl = async () => {
      const apiRequest = await fetch(url);
      const apiResponse = await apiRequest.json();
      setApiResponseState(apiResponse.meals);
      setIsFetching(false);
    };

    fetchUrl();
  }, []);

  const handleLeft = () => {
    if (isWide) {
      return x === 0 ? setX(-78 * (apiResponseState.length - 1)) : setX(x + 156);
    }
    return x === 0 ? setX(-86.5 * (apiResponseState.length - 1)) : setX(x + 173);
  };
  const handleRight = () => {
    if (isWide) {
      return x === -78 * (apiResponseState.length - 1) ? setX(0) : setX(x - 156);
    }
    return x === -86.5 * (apiResponseState.length - 1) ? setX(0) : setX(x - 173);
  };

  const isLoading = () => (
    <div className="loading-container">
      <div className="lds-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
  const renderCards = () => apiResponseState
  .filter((e) => e.strMeal.toLowerCase().includes(searchInput.toLowerCase()))
  .map((tales, id) => (
    <div
      style={ { transform: `translateX(${x}%)`,
        backgroundImage: `url(${tales.strMealThumb})` } }
      key={ id }
      className="tales-card slide"
    >
      <div className="card-infos-container">
        <div className="card-top">
          <p className="sup-left-p">Lorem Ipsum</p>
          <p className="sup-left-p">
            <i className="fas fa-clock timer" />
            <span style={ { textTransform: 'lowercase' } }>1h ago</span>
          </p>
        </div>
        <div className="card-bottom">
          <div className="history-container">
            <p className="history-title">{`Nome história #${id + 1}`}</p>
            <p className="is-favorite">
              {
                id % 2 !== 0
                  ? <span
                      style={ {
                      fontSize: '14px',
                      color: 'white',
                      textTransform: 'uppercase' } }
                  >
                    novo
                    </span>
                  : <i className="fas fa-heart" />
              }
            </p>
          </div>
          <div className="history-container chapter-container">
            <p className="chapter-title">Nome capítulo</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="highligths-list">
      <h2 className="shelf-h2">Resultados</h2>
      <div className="tales-container slider">
        {isFetching
          ? isLoading()
          : renderCards()}
        <button type="button" id="goLeftSearch" onClick={ handleLeft }>
          <i className="fas fa-chevron-left" />
        </button>
        <button type="button" id="goRightSearch" onClick={ handleRight }>
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}

export default Search;
