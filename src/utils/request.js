import axios from 'axios'
import store from '../store'

const token = store.getState().user.token

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:7001/api/v1'
      : 'https://api.evanone.site',
  timeout: 10000
})

service.interceptors.request.use(
  config => {
    config.headers['authorization'] = `Bearer ${token}`
    return config
  },
  error => Promise.reject(error)
)

service.interceptors.response.use(
  response => {
    if (response.status >= 200 && response.status < 300) {
      return response.data
    }
  },
  error => Promise.reject(error)
)

export default service
