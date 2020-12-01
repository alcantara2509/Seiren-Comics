import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SeirenContext from './SeirenContext';

function SeirenProvider({ children }) {
  const [anchorButton, setAnchorButton] = useState('');
  const [apiMeals, setApiMeals] = useState('');

  const ContextValue = {
    anchorButton,
    setAnchorButton,
    apiMeals,
    setApiMeals,
  };

  return (
    <SeirenContext.Provider value={ ContextValue }>
      {children}
    </SeirenContext.Provider>
  );
}

SeirenProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;

export default SeirenProvider;
