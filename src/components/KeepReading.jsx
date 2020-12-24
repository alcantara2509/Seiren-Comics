/* eslint-disable no-magic-numbers */
import React, { useContext } from 'react';
import SeirenContext from '../context/SeirenContext';
import './KeepReading.scss';

function KeepReading() {
  const { apiResponse, isFetching } = useContext(SeirenContext);

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
          : apiResponse.map((tales, id) => (
            <div
              style={ {
                backgroundImage: `url(${tales.strDrinkThumb})`,
              } }
              key={ id }
              className="tales-card slide"
            >
              <p className="naoentendir">{tales.strDrink}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default KeepReading;
