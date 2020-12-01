import { useContext } from 'react';
import SeirenContext from '../context/SeirenContext';

const { setApiMeals } = useContext(SeirenContext);

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const fetchUrl = async () => {
  const apiRequest = await fetch(url);
  const apiResponse = await apiRequest.json();
  setApiMeals(apiResponse.meals);
  console.log(apiResponse);
};

export default fetchUrl;
