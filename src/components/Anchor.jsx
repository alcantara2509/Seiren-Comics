import React, { useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import SeirenContext from '../context/SeirenContext';
import './Anchor.css';

function Anchor() {
  const { setAnchorButton } = useContext(SeirenContext);
  const handleClick = ({ target: { value } }) => setAnchorButton(value);
  return (
    <section className="anchor-btn-container">
      <Link to="/estante#slider-anchor" className="anchor-link">
        <button
          type="button"
          className="anchor-btn"
          onClick={ handleClick }
          value="destaque"
        >
          Destaque

        </button>
      </Link>
      <Link to="/estante#keep-anchor" className="anchor-link">
        <button
          type="button"
          className="anchor-btn"
          onClick={ handleClick }
          value="continue"
        >
          Continue Lendo

        </button>
      </Link>
      <Link to="/estante#releases-anchor" className="anchor-link">
        <button
          type="button"
          className="anchor-btn"
          onClick={ handleClick }
          value="lancamentos"
        >
          Lançamentos

        </button>
      </Link>
      <Link to="/estante#series-anchor" className="anchor-link">
        <button
          type="button"
          className="anchor-btn"
          onClick={ handleClick }
          value="series"
        >
          Séries

        </button>
      </Link>
    </section>
  );
}

export default Anchor;
