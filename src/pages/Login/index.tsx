import * as React from 'react'
import { Button, Form, Input, notification } from 'antd'
import * as Icon from '@ant-design/icons'
import * as mainApi from '@/api'
import { Container } from './login.style'
import { useNavigate } from 'react-router-dom'
import SvgIcon from '@/plugins/SvgIcon'
import store from '@/store'
import { accountApi, setToken } from '@/store/features/acountSlice'
import { UserInfo } from '@/types'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()

  const onFinish = async (values: Pick<UserInfo, 'name' | 'password'>) => {
    const result = await mainApi.userService.login(values)
    store.dispatch(setToken(result.data?.token))
    accountApi.refreshUserInfo()
    notification.success({ message: '欢迎回来 👏' })
    navigate('/')
  }

  return (
    <Container>
      <div className="wrapper">
        <div className="login-bg">
          <SvgIcon symbolId='code' width='400px' height='400px' />
        </div>
        <div className="login-main">
          <div className="login-form">
            <div className="login-title">请登录</div>
            <Form onFinish={onFinish}>
              <Form.Item name="name" rules={[{ required: true, message: '请输入用户名' }]}>
                <Input size="large" prefix={<Icon.UserOutlined />} placeholder="用户名" autoComplete="off" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: '请输入密码' },
                  { min: 4, max: 16, message: '密码长度必须为4-16位' }
                ]}
              >
                <Input
                  size="large"
                  prefix={<Icon.LockOutlined />}
                  type="password"
                  placeholder="密码"
                  autoComplete="off"
                />
              </Form.Item>
              <Form.Item>
                <Button size="large" type="primary" htmlType="submit" block>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default LoginPage
