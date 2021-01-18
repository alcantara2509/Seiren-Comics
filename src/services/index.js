const baseUrl = 'https://app.seirencomics.com.br/api';

const getToken = () => {
  const lstore = JSON.parse(sessionStorage.getItem('login'));
  if (lstore !== null) {
    return lstore.token;
  }
};

const myHeaders = new Headers({
  Authorization: `Bearer${getToken()}`,
});

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
};

export const fetchUrl = async () => {
  const apiRequest = await fetch(`${baseUrl}/home`);
  const apiResponse = await apiRequest.json();
  const arrApiResponseNov = Object.values(apiResponse.novidades);
  const arrApiResponseMV = Object.values(apiResponse.maisVistos);
  const arrApiResponseRank = Object.values(apiResponse.melhoresRankings);
  const arrApiResponseAll = Object.values(apiResponse.todos);
  return [arrApiResponseNov, arrApiResponseMV, arrApiResponseRank, arrApiResponseAll];
};

export const fetchUrlProfile = async () => {
  const apiRequestProfile = await fetch(`${baseUrl}/user/profile`, myInit);
  const apiResponseProfile = await apiRequestProfile.json();
  const arrApiResponseProfile = Object.values(apiResponseProfile);
  return arrApiResponseProfile;
};

export default fetchUrl;
