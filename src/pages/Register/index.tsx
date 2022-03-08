import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTimeout } from 'ahooks'
import { Button, Form, Input, notification } from 'antd'
import * as Icon from '@ant-design/icons'
import { RequestParams } from '@/utils/request'
import * as mainApi from '@/api'
import { Container } from './register.style'

const Register: React.FC = () => {

  const navigate = useNavigate()

  const onFinish = async (values: RequestParams) => {
    await mainApi.user.register(values)
    notification.success({ message: '注册成功' })
    useTimeout(() => {
      navigate('/login')
    }, 3000)
  }

  return (
    <Container>
      <div className='wrapper'>
        <div className='register-main'>
            <div className='register-form'>
              <div className='register-title'>注册</div>
              <Form
                onFinish={onFinish}
              >
                <Form.Item
                  name='name'
                  rules={[
                    { required: true, message: '请输入用户名' }
                  ]}
                >
                  <Input
                    prefix={<Icon.UserOutlined />}
                    placeholder='用户名'
                    autoComplete='off'
                  />
                </Form.Item>
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
                    注册
                  </Button>
                </Form.Item>
              </Form>
              <div className='login'>
                <Link to={'/login'}>登录已有账号</Link>
              </div>
            </div>
          </div>
      </div>
    </Container>
  )
}

export default Register
