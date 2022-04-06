import * as React from 'react'
import { Form, FormInstance, Input, Modal } from 'antd'

type Props = {
  form: FormInstance<any>
  visible: boolean
  onOk: () => void
  onCancel: () => void
}

const createUserModal: React.FC<Props> = (props) => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 24 }
  }

  const handleSubmit = () => {
    props.form.validateFields().then(props.onOk)
  }
  return (
    <Modal
      title="添加用户"
      visible={props.visible}
      onOk={handleSubmit}
      onCancel={props.onCancel}
      afterClose={() => props.form.resetFields()}
      okText="确认"
      cancelText="取消"
    >
      <Form form={props.form} {...layout}>
        <Form.Item name="name" label="用户名" rules={[{ required: true, message: '请输入用户名' }]}>
          <Input placeholder="请输入用户名" type="text" />
        </Form.Item>
        <Form.Item name="email" label="邮箱" rules={[{ required: true, message: '请输入邮箱' }]}>
          <Input placeholder="请输入邮箱" type="email" />
        </Form.Item>
        <Form.Item name="password" label="密码" rules={[{ required: true, message: '请输入密码' }]}>
          <Input placeholder="请输入密码" type="password" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default createUserModal
