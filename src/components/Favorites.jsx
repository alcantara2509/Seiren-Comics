/* eslint-disable no-magic-numbers */
import React, { useEffect, useState } from 'react';
import './Favorites.scss';
import { useMediaQuery } from 'react-responsive';

function Favorites() {
  const [apiResponseState, setApiResponseState] = useState([]);
  const [xFavs, setXFavs] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  const isWide = useMediaQuery({ query: '(min-width: 1800px)' });

  useEffect(() => {
    setIsFetching(true);
    const fetchUrl = async () => {
      const apiRequest = await fetch(url);
      const apiResponse = await apiRequest.json();
      setApiResponseState(apiResponse.drinks);
      setIsFetching(false);
    };

    fetchUrl();
  }, []);

  const handleLeftFavs = () => {
    if (isWide) {
      return xFavs === 0
        ? setXFavs(-78 * (apiResponseState.length - 1)) : setXFavs(xFavs + 78);
    }
    return xFavs === 0
      ? setXFavs(-86.5 * (apiResponseState.length - 1)) : setXFavs(xFavs + 86.5);
  };
  const handleRightFavs = () => {
    if (isWide) {
      return xFavs === -78 * (apiResponseState.length - 1)
        ? setXFavs(0) : setXFavs(xFavs - 78);
    }
    return xFavs === -86.5 * (apiResponseState.length - 1)
      ? setXFavs(0) : setXFavs(xFavs - 86.5);
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

  return (
    <div className="highligths-list">
      <h2 className="shelf-h2">Favoritos</h2>
      <div className="tales-container slider">
        { isFetching
          ? isLoading()
          : apiResponseState.map((tales, id) => (
            <div
              style={ { transform: `translateX(${xFavs}%)`,
                backgroundImage: `url(${tales.strDrinkThumb})` } }
              key={ id }
              className="tales-card slide"
            >
              <p className="naoentendir">{tales.strDrink}</p>
            </div>
          ))}
        <button type="button" id="goLeftFavs" onClick={ handleLeftFavs }>
          {'<'}
        </button>
        <button type="button" id="goRightFavs" onClick={ handleRightFavs }>
          {'>'}
        </button>
      </div>
    </div>
  );
}

export default Favorites;
