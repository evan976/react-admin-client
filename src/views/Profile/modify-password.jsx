import React from 'react'
import { Card, Form, Input, Button } from 'antd'
import { CheckOutlined } from '@ant-design/icons'

function ModifyPassword() {
  return (
    <Card title="修改密码" bordered={false}>
      <Form
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 12 }}
      >
        <Form.Item name="password" label="原密码">
          <Input />
        </Form.Item>
        <Form.Item name="new_password" label="新密码">
          <Input />
        </Form.Item>
        <Form.Item name="rel_new_password" label="确认密码">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" icon={<CheckOutlined />}>确认修改</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default ModifyPassword;
