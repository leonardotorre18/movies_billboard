import Axios from 'axios'

const urlBase = 'https://leonardoapi.herokuapp.com'

export const getAllMovies = () => {
  return Axios(urlBase + '/movies')
}
export const getNetflixMovies = () => {
  return Axios(urlBase + '/movies/netflix')
}
export const getHboMovies = () => {
  return Axios(urlBase + '/movies/hbo')
}
export const getDisneyMovies = () => {
  return Axios(urlBase + '/movies/disney')
}