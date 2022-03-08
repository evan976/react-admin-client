import * as React from 'react'
import { Button, Form, Input, notification } from 'antd'
import * as Icon from '@ant-design/icons'
import * as mainApi from '@/api'
import { Container } from './login.style'
import bg from '@/assets/images/login-bg.png'
import { RequestParams } from '@/utils/request'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage: React.FC = () => {

  const navigate = useNavigate()

  const onFinish = async (values: RequestParams) => {
    const result = await mainApi.user.login(values)
    localStorage.setItem('token', result.data?.token as string)
    notification.success({ message: '登录成功' })
    navigate('/')
  }

  return (
    <Container>
      <div className='wrapper'>
        <div className='login-bg'>
          <img src={bg} alt='loginBg' style={{width: '100%'}} />
        </div>
        <div className='login-main'>
          <div className='login-form'>
            <div className='login-title'>请登录</div>
            <Form
              onFinish={onFinish}
            >
              <Form.Item
                name='email'
                rules={[
                  { required: true, message: '请输入邮箱' },
                  { pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '请输入正确格式的邮箱' }
                ]}
              >
                <Input
                  prefix={<Icon.MailOutlined />}
                  placeholder='邮箱'
                  autoComplete='off'
                />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[
                  { required: true, message: '请输入密码' },
                  { min: 8, max: 16, message: '密码长度必须为8-16位' }
                ]}
              >
                <Input
                  prefix={<Icon.LockOutlined />}
                  type='password'
                  placeholder='密码'
                  autoComplete='off'
                />
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit' block>
                  登录
                </Button>
              </Form.Item>
            </Form>
            <div className='register'>
              <a>忘记密码</a>
              <span className='line'></span>
              <Link to={'/register'}>立即注册</Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default LoginPage
