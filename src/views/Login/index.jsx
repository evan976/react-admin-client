import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Form, Input, Button, Checkbox, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { loginSuccessSyncAction } from '../../store/actions/user'
import { login } from '../../api/user'
import './style.css'

function Login() {

  const dispatch = useDispatch()
  const token = useSelector(state => state.user.token)

  const onFinish = async values => {
    const result = await login(values)
    if (result.code === 0) {
      dispatch(loginSuccessSyncAction(result.data))
      message.success(result.message)
    } else {
      message.error(result.message)
    }
  }

  return (
    token
      ? <Redirect to="/index" />
      : <div className="login-page">
        <Card title="用户登录" style={{ width: 380 }}>
          <Form
            name="user-login"
            className="login-form"
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{
              remember: true,
              username: '13042688185',
              password: 'wjh1231'
            }}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: '用户名不能为空'
                }
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: '密码不能为空'
                }
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住账号和密码</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
              忘记密码？
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
              登 录
              </Button>
            Or <a href="">立即注册!</a>
            </Form.Item>
          </Form>
        </Card>
      </div>
  )
}

export default Login
