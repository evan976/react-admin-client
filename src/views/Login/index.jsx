import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, connect } from 'react-redux'
import {
  Card,
  Form,
  Input,
  Button,
  Checkbox,
  message
} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { loginSuccessSyncAction } from '../../store/actions/user'
import './style.css'
import { login } from '../../api/user'

function Login(props) {

  const token = useSelector(state => state.user.token)

  const onFinish = async values => {
    const data = await login(values)
    if (data.code === 0) {
      props.handleLogin(data.data)
      message.success(data.message)
    } else {
      message.error(data.message)
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

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
  handleLogin: token => dispatch(loginSuccessSyncAction(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
