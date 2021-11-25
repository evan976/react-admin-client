import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Space, Button, Divider, Table, Tag, Modal, Form, Input, message } from 'antd'
import { PlusOutlined, DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons'

import { getCategoryList, createCategory, getCategoryDetail, updateCategory, removeCategory, removeManyCategory } from '../../api/category'
import { getCategorySyncAction } from '../../store/actions/category'
import { dateFormat } from '../../utils/data-format'

const { confirm } = Modal

function Category() {

  const [form] = Form.useForm()

  const dispatch = useDispatch()

  const [type, setType] = useState('create')
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const categoryList = useSelector(state => state.category.categoryList)

  const onSelectChange = selectedRowKeys => {
    setSelectedRowKeys(selectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  const fetchCategoryDetail = async id => {
    setModalVisible(true)
    const result = await getCategoryDetail(id)
    form.setFieldsValue(result.data)
    setType('update')
  }

  const fetchCategory = async() => {
    try {
      const result = await getCategoryList()
      dispatch(getCategorySyncAction(result.data))
    } catch (error) {
      return false
    }
  }

  const handleSubmit = useCallback(async() => {
    const id = form.getFieldValue('_id')
    const values = form.getFieldsValue()
    try {
      if (!id) {
        await createCategory(values)
        message.success('新增分类成功')
      } else {
        await updateCategory(id, values)
        message.success('修改分类成功')
      }
      fetchCategory()
      setModalVisible(false)
    } catch (error) {
      message.error('操作失败')
    }
  }, [])

  // 批量删除
  const handleRemoveMany = () => {
    const ids = selectedRowKeys.join()
    confirm({
      title: '此操作将永久删除分类，是否继续？',
      icon: <QuestionCircleOutlined />,
      okText: '确认',
      cancelText: '取消',
      centered: true,
      onOk: async() => {
        try {
          await removeManyCategory(ids)
          message.success('删除成功')
          fetchCategory()
        } catch (error) {
          message.error('操作失败')
        }
      }
    })
  }

  useEffect(() => {
    fetchCategory()
  }, [])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '别名',
      dataIndex: 'slug',
      key: 'slug'
    },
    {
      title: '文章数量',
      dataIndex: 'count',
      key: 'count'
    },
    {
      title: '更新时间',
      key: 'updatedAt',
      dataIndex: 'updatedAt',
      render: text => dateFormat(text)
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <>
          <Tag
            style={{cursor: 'pointer'}}
            color="blue"
            onClick={() => fetchCategoryDetail(record._id)}
          >编辑</Tag>
          <Tag
            color="red"
            style={{cursor: 'pointer'}}
            onClick={() => {
              confirm({
                title: '此操作将永久删除该分类，是否继续？',
                icon: <QuestionCircleOutlined />,
                okText: '确认',
                cancelText: '取消',
                centered: true,
                onOk: async() => {
                  try {
                    await removeCategory(record._id)
                    fetchCategory()
                    message.success('分类删除成功！')
                  } catch (error) {
                    message.error('删除失败！')
                  }
                }
              })
            }}
          >删除</Tag>
        </>
      )
    }
  ]

  return (
    <>
      <Card title="分类管理" bordered={false}>
        <Space size="large">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setModalVisible(true)}
          >
            新增分类
          </Button>
          <Button
            danger
            type="primary"
            icon={<DeleteOutlined />}
            onClick={handleRemoveMany}
            disabled={selectedRowKeys.length === 0}
          >批量删除
          </Button>
        </Space>
        <Divider />
        <Table
          rowKey="_id"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={categoryList}
          pagination={false}
        />
      </Card>
      <Modal
        title={type === 'create' ? '创建分类' : '编辑分类'}
        visible={modalVisible}
        onCancel={() => {
          setModalVisible(false)
          setType('create')
        }}
        onOk={handleSubmit}
        afterClose={form.resetFields}
      >
        <Form form={form}>
          <Form.Item
            name="name"
            label="名称"
          >
            <Input placeholder="请输入名称" autoComplete="off" />
          </Form.Item>
          <Form.Item
            name="slug"
            label="别名"
            extra="用于 URL 显示，建议数字、字母并且小写"
          >
            <Input placeholder="请输入别名" autoComplete="off" />
          </Form.Item>
          <Form.Item name="description" label="描述">
            <Input.TextArea rows={4} placeholder="请输入描述" />
          </Form.Item>
          <Form.Item
            label="扩展"
            extra="自定义扩展属性，如：icon、background"
          >
            <Form.List name="extends">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <Space
                      key={key}
                      style={{ display: 'flex', justifyContent: 'space-between' }} align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, 'name']}
                        fieldKey={[fieldKey, 'name']}
                      >
                        <Input placeholder="name" autoComplete="off" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'value']}
                        fieldKey={[fieldKey, 'value']}
                      >
                        <Input placeholder="value" autoComplete="off" />
                      </Form.Item>
                      <Button
                        danger
                        type="primary"
                        icon={<DeleteOutlined  />}
                        onClick={() => remove(name)}
                      ></Button>
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      block
                      type="dashed"
                      onClick={() => add()}
                      icon={<PlusOutlined />}
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
    </>
  )
}

export default Category
