import axios from "axios"
import {} from "react-native-dotenv"
const openAPI = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function openapi_get_models_read(payload) {
  return openAPI.get(`/models`)
}
export const apiService = { openapi_get_models_read }
