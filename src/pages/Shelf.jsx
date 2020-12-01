import React, { useEffect, useState } from 'react';
import Anchor from '../components/Anchor';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Banner from '../images/shelf-banner.png';
import './Shelf.css';

function Shelf() {
  const [apiResponseState, setApiResponseState] = useState([]);
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  useEffect(() => {
    const fetchUrl = async () => {
      const apiRequest = await fetch(url);
      const apiResponse = await apiRequest.json();
      setApiResponseState(apiResponse.meals);
    };

    fetchUrl();
  }, []);

  console.log(apiResponseState);
  return (
    <section className="shelf-container">
      <Sidebar />
      <section className="shelf-content">
        <Topbar />
        <img src={ Banner } alt="banner" id="shelf-banner" />
        <Anchor />
        <div className="categories-list">
          <h2 className="shelf-h2">Destaques</h2>
          <div className="tales-container">
            {
              apiResponseState.map((tales, id) => (
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
          <h2 className="shelf-h2">Continue Lendo</h2>
          <h2 className="shelf-h2">Próximos Lançamentos</h2>
          <h2 className="shelf-h2">Séries</h2>
        </div>
      </section>
    </section>
  );
}

export default Shelf;
