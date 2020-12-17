const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const fetchUrl = async () => {
  const apiRequest = await fetch(url);
  const apiResponse = await apiRequest.json();
  return apiResponse.meals;
};

export default fetchUrl;
