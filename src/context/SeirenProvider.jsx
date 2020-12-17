/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import SeirenContext from './SeirenContext';
import { fetchUrl } from '../services';

function SeirenProvider({ children }) {
  const [anchorButton, setAnchorButton] = useState('');
  const [apiResponse, setApiResponse] = useState([]);
  const [isLogged, setIslogged] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [historyId, setHistoryId] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    const fetchApi = async () => {
      const apiResponsee = await fetchUrl();
      setApiResponse(apiResponsee);
      setIsFetching(false);
    };

    fetchApi();

    const isLoggedLocal = JSON.parse(localStorage.getItem(md5('isLogged')));
    isLoggedLocal ? setIslogged(true) : setIslogged(isLogged);
  }, []);

  const ContextValue = {
    anchorButton,
    setAnchorButton,
    apiResponse,
    setApiResponse,
    isLogged,
    setIslogged,
    searchInput,
    setSearchInput,
    historyId,
    setHistoryId,
    isFetching,
    setIsFetching,
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
