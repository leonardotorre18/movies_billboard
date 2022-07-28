import { getMovieForID } from "../services/movies"

export const moviesViewed = (list, callback) => {
  let listPromises = []

  list.map(id => listPromises.push(getMovieForID(id)))

  Promise.all(listPromises).then(values => {
    callback(values)
  })

}