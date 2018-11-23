export const getURL = opt => {
	let url = 'https://yts.am/api/v2/list_movies.json';
	//url = 'http://localhost:3000/test/list_movies.json'
  // eslint-disable-next-line no-sequences
  return url += (`?${Object.keys(opt).map((key) => (`${key}=${opt[key]}`)).join('&')}`),
  url;
}

export const fetchMovieList = url => {
  return fetch(url)
  .then(res => res.json())
  .then(json => json.data)
  .catch(err => console.log(err));
}