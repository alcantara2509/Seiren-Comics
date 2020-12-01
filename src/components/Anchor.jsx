import React, { useContext } from 'react';
import SeirenContext from '../context/SeirenContext';
import './Anchor.css';

function Anchor() {
  const { setAnchorButton } = useContext(SeirenContext);
  const handleClick = ({ target: { value } }) => setAnchorButton(value);
  console.log(setAnchorButton);
  return (
    <section className="anchor-btn-container">
      <button
        type="button"
        className="anchor-btn"
        onClick={ handleClick }
        value="destaque"
      >
        Destaque

      </button>
      <button
        type="button"
        className="anchor-btn"
        onClick={ handleClick }
        value="continue"
      >
        Continue Lendo

      </button>
      <button
        type="button"
        className="anchor-btn"
        onClick={ handleClick }
        value="lancamentos"
      >
        Lançamentos

      </button>
      <button
        type="button"
        className="anchor-btn"
        onClick={ handleClick }
        value="series"
      >
        Séries

      </button>
    </section>
  );
}

export default Anchor;
