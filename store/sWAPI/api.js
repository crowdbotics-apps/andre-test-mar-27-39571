import axios from "axios"
const sWAPI = axios.create({
  baseURL: "https://swapi.dev/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function swapi_get_people_read(payload) {
  return sWAPI.get(`/people`)
}
export const apiService = { swapi_get_people_read }
