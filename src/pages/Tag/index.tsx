import * as React from 'react'
import { Card, Form, Col, Row, Tag, Space, notification, Modal } from 'antd'
import * as Icon from '@ant-design/icons'
import { useRequest, useSafeState } from 'ahooks'
import * as mainApi from '@/api'
import { getColor } from '@/utils/randomColor'
import BaseEditForm from '@/components/BaseEditForm'

const TagPage: React.FC = () => {
  const [form] = Form.useForm()
  const [type, setType] = useSafeState<'create' | 'edit'>('create')

  const { data, refresh } = useRequest(mainApi.tagService.getTagList)

  const handleSubmit = async () => {
    const id = form.getFieldValue('id')
    const values = form.getFieldsValue()
    if (id) {
      await mainApi.tagService.updateTag(id, values)
      notification.success({ message: '修改标签成功' })
    } else {
      await mainApi.tagService.createTag(values)
      notification.success({ message: '新增标签成功' })
    }
    refresh()
    form.resetFields()
  }

  const handleRemove = (id: string) => {
    Modal.confirm({
      title: '提示',
      icon: <Icon.ExclamationCircleOutlined />,
      content: '确认删除该标签吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: async () => {
        await mainApi.tagService.removeTag(id)
        notification.success({ message: '删除标签成功' })
        refresh()
        form.resetFields()
        setType('create')
      }
    })
  }

  return (
    <>
      <Row gutter={24}>
        <Col span={10}>
          <Card title={type === 'create' ? '新增标签' : '编辑标签'} bordered={false}>
            <BaseEditForm
              form={form}
              toolbar
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
                  color={getColor()}
                  key={tag.id}
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    form.setFieldsValue(tag)
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
