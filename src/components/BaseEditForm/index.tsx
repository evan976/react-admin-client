import * as React from 'react'
import { Button, Form, FormInstance, Input, Space } from 'antd'
import * as Icon from '@ant-design/icons'

type Props = {
  form: FormInstance<any>
  toolbar: boolean
  onSubmit?: () => void
  onCancel?: () => void
  onDelete?: (id: string) => void
}

const BaseEditForm: React.FC<Props> = props => {

  const handleSubmit = () => {
    props.form.validateFields().then(props.onSubmit)
  }

  const handleDelete = () => {
    const id = props.form.getFieldValue('_id')
    id && (props.onDelete && props.onDelete(id))
  }

  return (
    <Form form={props.form}>
      <Form.Item
        name='name'
        label='名称'
        rules={[
          { required: true, message: '请输入名称' }
        ]}
      >
        <Input
          placeholder='名称'
          autoComplete='off'
        />
      </Form.Item>
      <Form.Item
        name='slug'
        label='别名'
        extra='用于 URL 显示，建议数字、字母并且小写'
        rules={[
          { required: true, message: '请输入别名' }
        ]}
      >
        <Input
          placeholder='别名'
          autoComplete='off'
        />
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
                    justifyContent: 'space-between',
                    rowGap: '4px',
                    columnGap: '2px'
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
      {
        props.toolbar && (
          <Form.Item>
            <Space>
              <Button
                type='primary'
                onClick={handleSubmit}
                icon={<Icon.CheckOutlined />}
              >
                确认
              </Button>
              <Button
                onClick={props.onCancel}
                icon={<Icon.RedoOutlined />}
              >
                取消
              </Button>
              <Button
                danger
                onClick={handleDelete}
                icon={<Icon.DeleteOutlined />}
              >
                删除
              </Button>
            </Space>
          </Form.Item>
        )
      }
    </Form>
  )
}

export default BaseEditForm
