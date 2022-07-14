import Axios from 'axios'

export const UrlBase = 'https://leonardoapi.herokuapp.com'

export const getAllMovies = () => Axios.get(UrlBase + "/movies");
export const getMovie = id => Axios.get(UrlBase + "/movies/id/" + id);
export const getNetflixMovies = () => Axios.get(UrlBase + "/movies/netflix");
export const getHboMovies = () => Axios.get(UrlBase + "/movies/hbo");
export const getDisneyMovies = () => Axios.get(UrlBase + "/movies/disney");

