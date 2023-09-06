import axios from 'axios'
import { URLS } from '../config'

const API_URL = URLS.auth

const $auth_api = axios.create({
  withCredentials: true,
  baseURL: API_URL
})

$auth_api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      window.location.reload()
      localStorage.removeItem('token')
    }
    return Promise.reject(error)
  }
)

export default $auth_api