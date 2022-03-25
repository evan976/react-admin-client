import * as React from 'react'
import { Button, Form, Input, notification } from 'antd'
import * as Icon from '@ant-design/icons'
import * as mainApi from '@/api'
import { Container } from './login.style'
import bg from '@/assets/images/bg.png'
import { useNavigate } from 'react-router-dom'
import { LoginDTO } from '@/api/user'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()

  const onFinish = async (values: LoginDTO) => {
    const result = await mainApi.userService.login(values)
    sessionStorage.setItem('token', result.data?.token as string)
    notification.success({ message: '登录成功' })
    navigate('/')
  }

  return (
    <Container>
      <div className="wrapper">
        <div className="login-bg">
          <img src={bg} alt="loginBg" style={{ width: '100%' }} />
        </div>
        <div className="login-main">
          <div className="login-form">
            <div className="login-title">请登录</div>
            <Form onFinish={onFinish}>
              <Form.Item name="name" rules={[{ required: true, message: '请输入用户名' }]}>
                <Input prefix={<Icon.UserOutlined />} placeholder="用户名" autoComplete="off" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: '请输入密码' },
                  { min: 4, max: 16, message: '密码长度必须为4-16位' }
                ]}
              >
                <Input
                  prefix={<Icon.LockOutlined />}
                  type="password"
                  placeholder="密码"
                  autoComplete="off"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
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
