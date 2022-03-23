import { Form, FormInstance, Input, Modal } from 'antd'
import * as React from 'react'

type Props = {
  form: FormInstance<any>
  visible: boolean
  onOk: () => void
  onCancel: () => void
}

const UpdatePasswordModal: React.FC<Props> = (props) => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 24 }
  }

  const handleSubmit = () => {
    props.form.validateFields().then(props.onOk)
  }

  return (
    <Modal
      title="修改密码"
      visible={props.visible}
      onOk={handleSubmit}
      onCancel={props.onCancel}
      afterClose={() => props.form.resetFields()}
      okText="确认"
      cancelText="取消"
    >
      <Form form={props.form} {...layout}>
        <Form.Item
          name="password"
          label="原密码"
          rules={[{ required: true, message: '请输入原密码' }]}
        >
          <Input placeholder="请输入原密码" type="password" />
        </Form.Item>
        <Form.Item
          name="newPassword"
          label="新密码"
          rules={[{ required: true, message: '请输入新密码' }]}
        >
          <Input placeholder="请输入新密码" type="password" />
        </Form.Item>
        <Form.Item
          name="relNewPassword"
          label="确认密码"
          rules={[{ required: true, message: '请输入确认密码' }]}
        >
          <Input placeholder="请再次输入密码" type="password" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default UpdatePasswordModal
