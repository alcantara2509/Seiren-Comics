/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SeirenContext from './SeirenContext';
import { fetchUrl, fetchUrlProfile, fetchUrlUser, fetchUrlPlans } from '../services';

function SeirenProvider({ children }) {
  const [anchorButton, setAnchorButton] = useState('');
  const [apiResponse, setApiResponse] = useState([]);
  const [apiResponseProfile, setApiResponseProfile] = useState([]);
  const [apiResponseUser, setApiResponseUser] = useState([]);
  const [apiResponsePlans, setApiResponsePlans] = useState([]);
  const [isLogged, setIsLogged] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [historyId, setHistoryId] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [isFetchingProfile, setIsFetchingProfile] = useState(false);
  const [isFetchingUser, setIsFetchingUser] = useState(false);
  const [isFetchingPlans, setIsFetchingPlans] = useState(false);
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
    apiResponsePlans,
    setApiResponsePlans,
    isFetchingUser,
    setIsFetchingUser,
    isFetchingPlans,
    setIsFetchingPlans,
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

    // setIsFetchingProfile(true);
    // const fetchApiProfile = async () => {
    //   const apiResponseProfi = await fetchUrlProfile();
    //   setApiResponseProfile(apiResponseProfi);
    //   setIsFetchingProfile(false);
    // };

    // fetchApiProfile();
    
    // setIsFetchingUser(true);
    // const fetchApiUser = async () => {
    //   const apiResponseUs = await fetchUrlUser();
    //   setApiResponseUser(apiResponseUs);
    //   setIsFetchingUser(false);
    // };

    // fetchApiUser();
    
    // setIsFetchingPlans(true);
    // const fetchApiPlans = async () => {
    //   const apiResponsePlan2 = await fetchUrlPlans();
    //   setApiResponsePlans(apiResponsePlan2);
    //   setIsFetchingPlans(false);
    // };

    // fetchApiPlans();
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
