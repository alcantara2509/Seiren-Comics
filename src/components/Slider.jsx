/* eslint-disable no-magic-numbers */
import React, { useEffect, useState } from 'react';
import './Slider.scss';

function Slider() {
  const [apiResponseState, setApiResponseState] = useState([]);
  const [x, setX] = useState(0);
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  useEffect(() => {
    const fetchUrl = async () => {
      const apiRequest = await fetch(url);
      const apiResponse = await apiRequest.json();
      setApiResponseState(apiResponse.meals);
    };

    fetchUrl();
  }, []);

  const handleLeft = () => (
    x === 0 ? setX(-100 * (apiResponseState.length - 4)) : setX(x + 100)
  );
  const handleRight = () => (
    x === -100 * (apiResponseState.length - 4) ? setX(0) : setX(x - 100)
  );

  return (
    <div className="highligths-list">
      <h2 className="shelf-h2">Destaques</h2>
      <div className="tales-container slider">
        {
          apiResponseState.map((tales, id) => (
            <div
              style={ { transform: `translateX(${x}%)`,
                backgroundImage: `url(${tales.strMealThumb})` } }
              key={ id }
              className="tales-card slide"
            >
              <p className="naoentendir">{tales.strMeal}</p>
            </div>
          ))
        }
        <button
          type="button"
          id="goLeft"
          onClick={ handleLeft }
        >
          left

        </button>
        <button type="button" id="goRight" onClick={ handleRight }>right</button>
      </div>
    </div>
  );
}

export default Slider;

// *************

// /* eslint-disable no-magic-numbers */
// import React, { useEffect, useState } from 'react';
// import './Slider.scss';

// function Slider() {
//   const [apiResponseState, setApiResponseState] = useState([]);
//   const [numberCardNext, setNumberCardNext] = useState(7);
//   const [numberCardInicial, setNumberCardInicial] = useState(0);
//   const [isDisabled, setIsDisabled] = useState(false);
//   const [isDisabledPrev, setIsDisabledPrev] = useState(true);
//   const [max, setMax] = useState(0);
//   const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

//   useEffect(() => {
//     const fetchUrl = async () => {
//       const apiRequest = await fetch(url);
//       const apiResponse = await apiRequest.json();
//       setApiResponseState(apiResponse.meals);
//       setMax(apiResponse.length);
//     };

//     fetchUrl();
//   }, []);

//   const handleClickNext = () => {
//     if (apiResponseState.length - 1 === numberCardNext) {
//       setIsDisabled(true);
//     }
//     setNumberCardNext(numberCardNext + 1);
//     setNumberCardInicial(numberCardInicial + 1);
//     setIsDisabledPrev(false);
//   };

//   const handleClickPrev = () => {
//     if (apiResponseState.length - 1 !== numberCardNext) {
//       setIsDisabled(false);
//     }
//     if (numberCardInicial === 1) {
//       setIsDisabledPrev(true);
//     }
//     setNumberCardNext(numberCardNext - 1);
//     setNumberCardInicial(numberCardInicial - 1);
//   };

//   console.log(max);

//   return (
//     <div className="highligths-list">
//       <h2 className="shelf-h2">Destaques</h2>
//       <div className="tales-container">
//         {
//           apiResponseState.slice(numberCardInicial, numberCardNext)
//             .map((tales, id) => (
//               <div
//                 key={ id }
//                 className="tales-card"
//                 style={ { backgroundImage: `url(${tales.strMealThumb})` } }
//               >
//                 <p className="naoentendir">{tales.strMeal}</p>
//               </div>
//             ))
//         }
//       </div>
//       <button
//         type="button"
//         onClick={ handleClickPrev }
//         disabled={ isDisabledPrev }
//       >
//         anterior

//       </button>
//       <button
//         type="button"
//         onClick={ handleClickNext }
//         disabled={ isDisabled }
//       >
//         proximo

//       </button>
//     </div>
//   );
// }

// export default Slider;
