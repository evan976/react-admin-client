import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Form, Input, Button, message } from 'antd'

import { updateUserInfo } from '../../api/user'
import { logoutSyncAction } from '../../store/actions/user'

function ModifyPassword() {

  const id = useSelector(state => state.user.profile._id)
  const dispatch = useDispatch()

  const onFinish = async values => {
    const result = await updateUserInfo(id, values)
    if (result.code === 1) {
      message.error(result.message)
      return false
    }
    message.success('密码修改成功，请重新登录')
    dispatch(logoutSyncAction())
  }

  return (
    <Card title="修改密码" bordered={false}>
      <Form
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 12 }}
        onFinish={onFinish}
      >
        <Form.Item name="password" label="原密码">
          <Input.Password autoComplete="off" />
        </Form.Item>
        <Form.Item name="new_password" label="新密码">
          <Input.Password autoComplete="off" />
        </Form.Item>
        <Form.Item name="rel_new_password" label="确认密码">
          <Input.Password autoComplete="off" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">确认修改</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default ModifyPassword
