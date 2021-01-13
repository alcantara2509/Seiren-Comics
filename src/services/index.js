const url = 'http://localhost:8000/api/home';
const profileUrl = 'http://localhost:8000/api/user/profile/';

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
  const apiRequest = await fetch(url);
  const apiResponse = await apiRequest.json();
  const arrApiResponse = Object.values(apiResponse);
  console.log(arrApiResponse);
  return arrApiResponse;
};

export const fetchUrlProfile = async () => {
  const apiRequestProfile = await fetch(profileUrl, myInit);
  const apiResponseProfile = await apiRequestProfile.json();
  const arrApiResponseProfile = Object.values(apiResponseProfile);
  return arrApiResponseProfile;
};

export default fetchUrl;
