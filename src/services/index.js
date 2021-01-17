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
  const arrApiResponse = Object.values(apiResponse.novidades);
  return arrApiResponse;
};

export const fetchUrlProfile = async () => {
  const apiRequestProfile = await fetch(`${baseUrl}/user/profile`, myInit);
  const apiResponseProfile = await apiRequestProfile.json();
  const arrApiResponseProfile = Object.values(apiResponseProfile);
  return arrApiResponseProfile;
};

export default fetchUrl;
