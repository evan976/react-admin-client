import axios from 'axios'
import { message } from 'antd'
import store from '../store'
import { resetUserSyncAction } from '../store/actions/user'

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:7001/api/v1'
      : 'https://api.evanone.site',
  timeout: 10000
})

service.interceptors.request.use(
  config => {
    config.headers['authorization'] = `Bearer ${store.getState().user.token}`
    return config
  }
)

service.interceptors.response.use(
  response => {
    if (response.status >= 200 && response.status < 300) {
      if (response.data.code === 0) {
        return response.data
      }
      if (response.data.code === 401) {
        // 清除 store 中用户数据
        store.dispatch(resetUserSyncAction())
        message.error(response.data.message)
        return false
      }
    }
  },
  error => console.log(error)
)

export default service
