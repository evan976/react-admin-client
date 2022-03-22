import * as React from 'react'
import { Card, Form, Col, Row, Tag, Space, notification, Modal } from 'antd'
import * as Icon from '@ant-design/icons'
import { useRequest, useSafeState } from 'ahooks'
import * as mainApi from '@/api'
import EditForm from './EditFrom'

const TagPage: React.FC = () => {
  const [form] = Form.useForm()
  const [type, setType] = useSafeState<'create' | 'edit'>('create')
  const [background, setBackground] = useSafeState<string>('')

  const { data, refresh } = useRequest(mainApi.tagService.findAll)

  const handleSubmit = async () => {
    const id = form.getFieldValue('id')
    const values = { ...form.getFieldsValue(), background }
    if (id) {
      await mainApi.tagService.update(id, values)
      notification.success({ message: '修改标签成功' })
    } else {
      await mainApi.tagService.create(values)
      notification.success({ message: '新增标签成功' })
    }
    refresh()
    form.resetFields()
    setBackground('')
  }

  const handleRemove = (id: string) => {
    Modal.confirm({
      title: '提示',
      icon: <Icon.ExclamationCircleOutlined />,
      content: '确认删除该标签吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: async () => {
        await mainApi.tagService.remove(id)
        notification.success({ message: '删除标签成功' })
        refresh()
        form.resetFields()
        setBackground('')
        setType('create')
      }
    })
  }

  return (
    <>
      <Row gutter={24}>
        <Col span={10}>
          <Card title={type === 'create' ? '新增标签' : '编辑标签'} bordered={false}>
            <EditForm
              form={form}
              value={background}
              setValue={setBackground}
              onSubmit={handleSubmit}
              onCancel={() => {
                form.resetFields()
                setType('create')
              }}
              onDelete={handleRemove}
            />
          </Card>
        </Col>
        <Col span={14}>
          <Card title={'标签列表'} bordered={false}>
            <Space size={'small'} wrap>
              {data?.data?.map((tag) => (
                <Tag
                  color={tag.color}
                  key={tag.id}
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    form.setFieldsValue(tag)
                    setBackground(tag.background as string)
                    setType('edit')
                  }}
                >
                  {tag.label}
                </Tag>
              ))}
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default TagPage
