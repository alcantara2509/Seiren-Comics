// /* eslint-disable react/prop-types */
// import React from 'react';

// function Highligths() {
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

// export default Highligths;
