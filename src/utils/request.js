import axios from 'axios'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000/api/private/v1'
    : 'https://api.evanone.site',
  timeout: 10000
})

service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    config.headers['auth'] = token
    return config
  },
  error => Promise.reject(error)
)

service.interceptors.response.use(
  response => {
    if (response.status >= 200 && response.status < 300) {
      const data = response.data
      if (data.code === 0) {
        return data.data
      }
    }
  },
  error => Promise.reject(error)
)

export default service
