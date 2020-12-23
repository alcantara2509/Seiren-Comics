const url = 'http://localhost:8000/api/comics/';
const profileUrl = 'http://localhost:8000/api/user/profile/';

const getToken = () => {
  const lstore = JSON.parse(localStorage.getItem('login'));
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
  const apiRequest = await fetch(url, myInit);
  const apiResponse = await apiRequest.json();
  const arrApiResponse = Object.values(apiResponse);
  return arrApiResponse;
};

export const fetchUrlProfile = async () => {
  const apiRequest = await fetch(profileUrl, myInit);
  const apiResponse = await apiRequest.json();
  const arrApiResponse = Object.values(apiResponse);
  return arrApiResponse;
};

export default fetchUrl;
