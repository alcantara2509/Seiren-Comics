import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SeirenContext from './SeirenContext';

function SeirenProvider({ children }) {
  const [anchorButton, setAnchorButton] = useState('');

  const ContextValue = {
    anchorButton,
    setAnchorButton,
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
