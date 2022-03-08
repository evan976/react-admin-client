import * as React from 'react'
import { Modal, Form, Input, Space, Button, FormInstance } from 'antd'
import * as Icon from '@ant-design/icons'

export type EditModalProps = {
  form: FormInstance<any>
  title: string
  visible: boolean
  onOk: () => void
  onCancel: () => void
}

const EditModal: React.FC<EditModalProps> = props => {

  const handleSubmit = () => {
    props.form.validateFields().then(props.onOk)
  }

  return (
    <Modal
      title={props.title}
      visible={props.visible}
      onOk={handleSubmit}
      onCancel={props.onCancel}
      afterClose={props.form.resetFields}
      okText='确认'
      cancelText='取消'
    >
      <Form form={props.form}>
          <Form.Item
            name='name'
            label='名称'
            rules={[
              { required: true, message: '请输入名称' }
            ]}
          >
            <Input placeholder='名称' autoComplete='off' />
          </Form.Item>
          <Form.Item
            name='slug'
            label='别名'
            extra='用于 URL 显示，建议数字、字母并且小写'
            rules={[
              { required: true, message: '请输入别名' }
            ]}
          >
            <Input placeholder='别名' autoComplete='off' />
          </Form.Item>
          <Form.Item name='description' label='描述'>
            <Input.TextArea rows={4} placeholder='描述' />
          </Form.Item>
          <Form.Item
            label='扩展'
            extra='自定义扩展属性, 如: icon、background'
          >
            <Form.List name='extension'>
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                      align='baseline'
                    >
                      <Form.Item
                        {...restField}
                        name={[name, 'label']}
                      >
                        <Input placeholder='label' autoComplete='off' />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'value']}
                      >
                        <Input placeholder='value' autoComplete='off' />
                      </Form.Item>
                      <Button
                        danger
                        type='primary'
                        icon={<Icon.DeleteOutlined  />}
                        onClick={() => remove(name)}
                      ></Button>
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      block
                      type='dashed'
                      onClick={() => add()}
                      icon={<Icon.PlusOutlined />}
                    >
                    增加扩展
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form.Item>
        </Form>
    </Modal>
  )
}

export default EditModal
