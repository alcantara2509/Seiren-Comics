/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import SeirenContext from './SeirenContext';

function SeirenProvider({ children }) {
  const [anchorButton, setAnchorButton] = useState('');
  const [apiMeals, setApiMeals] = useState('');
  const [isLogged, setIslogged] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const isLoggedLocal = JSON.parse(localStorage.getItem(md5('isLogged')));
    isLoggedLocal ? setIslogged(true) : setIslogged(isLogged);
  }, []);

  const ContextValue = {
    anchorButton,
    setAnchorButton,
    apiMeals,
    setApiMeals,
    isLogged,
    setIslogged,
    searchInput,
    setSearchInput,
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
