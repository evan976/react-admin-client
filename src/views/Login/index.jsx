import React from 'react'
import { Card, Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { login } from '../../api'
import './style.css'

function Login() {

  return (
    <div className="login-page">
      <Card title="用户登录" style={{ width: 380 }}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true
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
              prefix={<UserOutlined className="site-form-item-icon" />}
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
              prefix={<LockOutlined className="site-form-item-icon" />}
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
