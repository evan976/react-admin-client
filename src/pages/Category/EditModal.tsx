import * as React from 'react'
import { Form, FormInstance, Input } from 'antd'
import AwesomeUpload from '@/components/Upload'

type Props = {
  form: FormInstance<any>
  value: string
  setValue: (value: string) => void
}

const EditForm: React.FC<Props> = (props) => {
  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 24 }
  }
  return (
    <Form {...layout} form={props.form}>
      <Form.Item name="name" label="名称" rules={[{ required: true, message: '请输入名称' }]}>
        <Input placeholder="名称" autoComplete="off" />
      </Form.Item>
      <Form.Item name="slug" label="别名" rules={[{ required: true, message: '请输入别名' }]}>
        <Input placeholder="别名" autoComplete="off" />
      </Form.Item>
      <Form.Item name="description" label="描述">
        <Input.TextArea rows={2} placeholder="描述" />
      </Form.Item>
      <Form.Item name="icon" label="图标">
        <Input placeholder="图标" autoComplete="off" />
      </Form.Item>
      <Form.Item label="背景图">
        <AwesomeUpload value={props.value} setValue={props.setValue} />
      </Form.Item>
    </Form>
  )
}

export default EditForm
