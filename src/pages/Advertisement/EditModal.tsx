import * as React from 'react'
import { Col, Form, FormInstance, Input, Row, Select } from 'antd'
import AwesomeUpload from '@/components/Upload'
import { onlineStates, weightStates } from '@/enums'

type Props = {
  form: FormInstance<any>
  value: string
  setValue: (value: string) => void
}

const EditForm: React.FC<Props> = (props) => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 24 }
  }
  return (
    <Form {...layout} form={props.form}>
      <Form.Item name="name" label="名称" rules={[{ required: true, message: '请输入名称' }]}>
        <Input placeholder="名称" autoComplete="off" />
      </Form.Item>
      <Form.Item label="图片" rules={[{ required: true, message: '请上传图片或输入图片地址' }]}>
        <AwesomeUpload value={props.value} setValue={props.setValue} />
      </Form.Item>
      <Form.Item name="link" label="链接地址">
        <Input placeholder="链接地址" autoComplete="off" />
      </Form.Item>
      <Form.Item name="description" label="描述">
        <Input.TextArea rows={2} placeholder="描述" />
      </Form.Item>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="status"
            label="广告状态"
            labelCol={{ span: 8 }}
          >
            <Select placeholder="选择广告状态">
              {
                onlineStates.map(item => (
                  <Select.Option
                    key={item.value}
                    value={item.value}
                  >
                    {item.name}
                  </Select.Option>
                ))
              }
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="weight" label="权重" labelCol={{ span: 6 }}>
            <Select placeholder="选择文章权重">
              {
                weightStates.map(item => (
                  <Select.Option
                    key={item.value}
                    value={item.value}
                  >
                    {item.name}
                  </Select.Option>
                ))
              }
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default EditForm
