import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import zhCN from 'antd/lib/locale/zh_CN'
import { ConfigProvider } from 'antd'
import store, { persistor } from './store'
import 'antd/dist/antd.css'
import './styles/global.css'
import './styles/antd.css'
import App from './App'


ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Router>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Router>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
)
