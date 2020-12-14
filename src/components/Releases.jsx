/* eslint-disable no-magic-numbers */
import React, { useEffect, useState } from 'react';
import './Releases.scss';
import { useMediaQuery } from 'react-responsive';

function Releases() {
  const [apiResponseState, setApiResponseState] = useState([]);
  const [xReleases, setXReleases] = useState(0);
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

  const handleLeftReleases = () => {
    if (isWide) {
      return xReleases === 0
        ? setXReleases(-78 * (apiResponseState.length - 1))
        : setXReleases(xReleases + 156);
    }
    return xReleases === 0
      ? setXReleases(-86.5 * (apiResponseState.length - 1))
      : setXReleases(xReleases + 173);
  };
  const handleRightReleases = () => {
    if (isWide) {
      return xReleases === -78 * (apiResponseState.length - 1)
        ? setXReleases(0) : setXReleases(xReleases - 156);
    }
    return xReleases === -86.5 * (apiResponseState.length - 1)
      ? setXReleases(0) : setXReleases(xReleases - 173);
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
      <h2 className="shelf-h2">Lançamento</h2>
      <div className="tales-container slider">
        { isFetching
          ? isLoading()
          : apiResponseState.map((tales, id) => (
            <div
              style={ { transform: `translateX(${xReleases}%)`,
                backgroundImage: `url(${tales.strMealThumb})` } }
              key={ id }
              className="tales-card slide"
            >
              <p className="naoentendir">{tales.strMeal}</p>
            </div>
          ))}
        <button type="button" id="goLeftReleases" onClick={ handleLeftReleases }>
          <i className="fas fa-chevron-left" />
        </button>
        <button type="button" id="goRightReleases" onClick={ handleRightReleases }>
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}

export default Releases;
