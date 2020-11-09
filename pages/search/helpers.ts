const baseURL = 'https://rapidapi.p.rapidapi.com/';
export const getSuggestions = async (query) => {
  const response = await fetch(`${baseURL}suggest/v1.7/json?query=${query}&locale=en_US`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "e99f359a1bmsh2ac75c186a93832p12e282jsn579a9b55eb2e",
      "x-rapidapi-host": "hotels-com-free.p.rapidapi.com"
    }
  })

  if (!response.ok) {
    return new Error
  }
  
  const data = await response.json();
  
  let suggestions;

  if (data.suggestions) {
    suggestions = data.suggestions.map(item => item.entities).flat();
  }

  return suggestions
}

export const formatDate = (value: number) => {
  const date = new Date(value)
  const month = date.getMonth() + 1;
  const day = `${date.getDate()}`.length === 1 ? `0${date.getDate()}` : `${date.getDate()}`;
  const year = date.getFullYear();

  return [year, month, day].join('-');
}

export const getHotels = async (checkIn, checkOut, lat, lon) => {
  const response = await fetch(`${baseURL}srle/listing/v1/brands/hotels.com?checkIn=${checkIn}&checkOut=${checkOut}&lat=${lat}&lon=${lon}&locale=en_US&rooms=1&currency=USD&pageNumber=1`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "e99f359a1bmsh2ac75c186a93832p12e282jsn579a9b55eb2e",
      "x-rapidapi-host": "hotels-com-free.p.rapidapi.com"
    }
  })

  const data = await response.json();
  console.log(data.data.body.searchResults)
  
  return data.data.body.searchResults;
}

const checkForm = (place) => {
  if (place === '') {
    return false;
  }
}