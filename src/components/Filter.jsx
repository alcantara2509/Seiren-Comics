import React from 'react';

function Filter() {
  return (
    <>
      <button
        type="button"
        className="filter-btn"
        onClick={ handleClick }
        value="destaque"
      >
        Destaque

      </button>
      <button
        type="button"
        className="filter-btn"
        onClick={ handleClick }
        value="destaque"
      >
        Continue Lendo

      </button>
      <button
        type="button"
        className="filter-btn"
        onClick={ handleClick }
        value="destaque"
      >
        Lançamentos

      </button>
      <button
        type="button"
        className="filter-btn"
        onClick={ handleClick }
        value="destaque"
      >
        Séries

      </button>
    </>
  );
}

export default Filter;
