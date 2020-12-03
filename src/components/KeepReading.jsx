/* eslint-disable no-magic-numbers */
import React, { useEffect, useState } from 'react';
import './Slider.scss';
import { useMediaQuery } from 'react-responsive';

function KeepReading() {
  const [apiResponseState, setApiResponseState] = useState([]);
  const [xKeep, setXKeep] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

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

  const handleLeftKeep = () => {
    if (isWide) {
      return xKeep === 0
        ? setXKeep(-78 * (apiResponseState.length - 1)) : setXKeep(xKeep + 78);
    }
    return xKeep === 0
      ? setXKeep(-86.5 * (apiResponseState.length - 1)) : setXKeep(xKeep + 86.5);
  };
  const handleRightKeep = () => {
    if (isWide) {
      return xKeep === -78 * (apiResponseState.length - 1)
        ? setXKeep(0) : setXKeep(xKeep - 78);
    }
    return xKeep === -86.5 * (apiResponseState.length - 1)
      ? setXKeep(0) : setXKeep(xKeep - 86.5);
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
      <h2 className="shelf-h2">Continue Lendo</h2>
      <div className="tales-container slider">
        { isFetching
          ? isLoading()
          : apiResponseState.map((tales, id) => (
            <div
              style={ { transform: `translateX(${xKeep}%)`,
                backgroundImage: `url(${tales.strMealThumb})` } }
              key={ id }
              className="tales-card slide"
            >
              <p className="naoentendir">{tales.strMeal}</p>
            </div>
          ))}
        <button type="button" id="goLeftKeep" onClick={ handleLeftKeep }>
          lvcxxcvxcveft

        </button>
        <button type="button" id="goRightKeep" onClick={ handleRightKeep }>
          irigvcxvcxcvht

        </button>
      </div>
    </div>
  );
}

export default KeepReading;
