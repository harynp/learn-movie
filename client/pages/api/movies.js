export const API = 'http://www.omdbapi.com/?apikey=1babd332';

const getMovies = async (pages) => {
  try {
    const URL = `${API}&s=marvel&page=${pages}`;
    const callAPI = await fetch(URL);
    const data = await callAPI.json();
    return data;
  } catch (error) {
    throw error;
  }
}

const getDetailMovies = async (id) => {
  try {
    const URL = `${API}&i=${id}`;
    const callAPI = await fetch(URL);
    const data = await callAPI.json();
    return data;
  } catch (error) {
    throw (error)
  }
}

export { getMovies, getDetailMovies }