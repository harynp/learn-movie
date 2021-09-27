export const API = 'http://www.omdbapi.com/?apikey=1babd332';

export const getMovies = async (pages) => {
  try {
    console.log('pages nambah bro', pages);
    const URL = `${API}&s=marvel&page=${pages}`;
    const callAPI = await fetch(URL);
    const data = await callAPI.json();
    return data;
  } catch (error) {
    throw error;
  }
}


// export const getMovies = async (cat, page) => {
//   if (cat) {
//     const endpoint = `${ep}&s=${cat ? cat : 'batman'}&page=${page}`;
//     const res = await fetch(endpoint);
//     const json = await res.json();
//     return json;
//   }
//   return null;
// };