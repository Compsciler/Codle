import axios from 'axios'
const baseUrl = 'https://codle.herokuapp.com/api/scores'

/*
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
*/

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

/*
const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}
*/

const scoreService = { create }
export default scoreService
