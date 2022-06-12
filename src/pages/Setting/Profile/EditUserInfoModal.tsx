import AwesomeUpload from '@/components/Upload'
import { Form, FormInstance, Input, Modal, Select } from 'antd'
import * as React from 'react'

type Props = {
  form: FormInstance<any>
  avatar: string
  setAvatar: React.Dispatch<React.SetStateAction<string>>
  visible: boolean
  onOk: () => void
  onCancel: () => void
}

const EditUserInfoModal: React.FC<Props> = ({
  form,
  avatar,
  setAvatar,
  visible,
  onOk,
  onCancel
}) => {

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 24 }
  }

  const handleSubmit = () => {
    form.validateFields().then(onOk)
  }

  return (
    <Modal
      title="编辑用户信息"
      visible={visible}
      onOk={handleSubmit}
      onCancel={onCancel}
      afterClose={() => form.resetFields()}
      okText="确认"
      cancelText="取消"
    >
      <Form {...layout} form={form}>
        <Form.Item label="头像">
          <AwesomeUpload
            value={avatar}
            setValue={setAvatar}
            className="avatar-upload"
          />
        </Form.Item>
        <Form.Item name="name" label="用户名" rules={[{ required: true, message: '请输入用户名' }]}>
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item name="email" label="邮箱" rules={[{ required: true, message: '请输入邮箱' }]}>
          <Input placeholder="请输入邮箱" type="email" />
        </Form.Item>
        <Form.Item name="position" label="职位">
          <Input placeholder="请输入职位" />
        </Form.Item>
        <Form.Item name="address" label="地址">
          <Input placeholder="请输入地址" />
        </Form.Item>
        <Form.Item name="siteUrl" label="网站">
          <Input placeholder="请输入网站链接" />
        </Form.Item>
        <Form.Item name="role" label="权限">
          <Select placeholder="请选择权限">
            <Select.Option value="admin">管理员</Select.Option>
            <Select.Option value="user">普通用户</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default EditUserInfoModal
