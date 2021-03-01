/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SeirenContext from './SeirenContext';
import { fetchUrl, fetchUrlProfile, fetchUrlUser } from '../services';

function SeirenProvider({ children }) {
  const [anchorButton, setAnchorButton] = useState('');
  const [apiResponse, setApiResponse] = useState([]);
  const [apiResponseProfile, setApiResponseProfile] = useState([]);
  const [apiResponseUser, setApiResponseUser] = useState([]);
  const [isLogged, setIsLogged] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [historyId, setHistoryId] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [isFetchingProfile, setIsFetchingProfile] = useState(false);
  const [isFetchingUser, setIsFetchingUser] = useState(false);
  const [menuMobileState, setMenuMobileState] = useState('disabled');

  const ContextValue = {
    anchorButton,
    setAnchorButton,
    apiResponse,
    setApiResponse,
    isLogged,
    setIsLogged,
    searchInput,
    setSearchInput,
    historyId,
    setHistoryId,
    isFetching,
    setIsFetching,
    apiResponseProfile,
    setApiResponseProfile,
    isFetchingProfile,
    setIsFetchingProfile,
    apiResponseUser,
    setApiResponseUser,
    isFetchingUser,
    setIsFetchingUser,
    menuMobileState,
    setMenuMobileState,
  };

  useEffect(() => {
    setIsFetching(true);
    const fetchApi = async () => {
      const apiResponseComics = await fetchUrl();
      setApiResponse(apiResponseComics);
      setIsFetching(false);
    };

    fetchApi();

    setIsFetchingProfile(true);
    const fetchApiProfile = async () => {
      const apiResponseProf = await fetchUrlProfile();
      setApiResponseProfile(apiResponseProf);
      setIsFetchingProfile(false);
    };

    fetchApiProfile();
    
    setIsFetchingUser(true);
    const fetchApiUser = async () => {
      const apiResponseProf = await fetchUrlUser();
      setApiResponseUser(apiResponseProf);
      setIsFetchingUser(false);
    };

    fetchApiUser();
  }, []);

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
