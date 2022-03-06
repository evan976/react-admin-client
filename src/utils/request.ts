import axios from 'axios'

export interface RequestParams {
  [key: string]: string | number
}

export interface Response<T = any> {
  code: number
  message: string
  data?: T
}

const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000
})

request.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    config.headers = config.headers || {}
    config.headers['Authorization'] = `Bearer ${token}`
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    return Promise.resolve(response.data)
  },
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('token')
    }
    return Promise.reject(error.response?.data?.message)
  }
)

export default request
