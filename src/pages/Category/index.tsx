import * as React from 'react'
import { Button, Table, Space, Form, Modal, notification } from 'antd'
import * as Icon from '@ant-design/icons'
import { useAntdTable, useSafeState } from 'ahooks'
import { ColumnsType } from 'antd/lib/table'
import * as mainApi from '@/api'
import { Categorize } from '@/types/categorize'
import { RequestParams } from '@/utils/request'
import { TableResult } from '@/types'
import { dateFormat } from '@/utils/dateFormat'
import EditModal from './EditModal'

const getTableData = async ({}, formData: RequestParams): Promise<TableResult<Categorize>> => {
  const res = await mainApi.category.getCategoryList(formData)
  return ({
    total: res.data?.total as number,
    list: res.data?.data as Categorize[]
  })
}

const Category: React.FC = () => {

  const [form] = Form.useForm<Categorize>()
  const [type, setType] = useSafeState<'create' | 'edit'>('create')
  const [visible, setVisible] = useSafeState<boolean>(false)
  const [selectedRowKeys, setSelectedRowKeys] = useSafeState<React.Key[]>([])

  const { tableProps, refresh } = useAntdTable(getTableData)

  const columns: ColumnsType<Categorize> = [
    {
      title: '名称',
      width: 220,
      dataIndex: 'name'
    },
    {
      title: '别名',
      width: 220,
      dataIndex: 'slug'
    },
    {
      title: '描述',
      width: 280,
      dataIndex: 'description'
    },
    {
      title: '文章数',
      width: 120,
      dataIndex: 'article_count'
    },
    {
      title: '时间',
      dataIndex: 'created_at',
      render(_, category) {
        return (
          <Space direction='vertical'>
            <span>发布时间: {dateFormat(category.created_at)}</span>
            <span>更新时间: {dateFormat(category.updated_at)}</span>
          </Space>
        )
      }
    },
    {
      title: '操作',
      width: 220,
      render: (_, category) => (
        <>
          <Button
            type='link'
            onClick={() => fetchCategoryDetail(category._id!)}
          >编辑</Button>
          <Button
            type='link'
            danger
            onClick={() => {
              Modal.confirm({
                title: '此操作将永久删除该分类，是否继续？',
                icon: <Icon.QuestionCircleOutlined />,
                okText: '确认',
                cancelText: '取消',
                centered: true,
                onOk: () => {
                  removeCategory(category._id!)
                  notification.success({ message: '删除分类成功' })
                  refresh()
                }
              })
            }}
          >删除</Button>
        </>
      )
    }
  ]

  const handleSubmit = async () => {
    const id = form.getFieldValue('_id')
    const values = form.getFieldsValue()
    if (id) {
      await mainApi.category.updateCategory(id, values)
      notification.success({ message: '修改分类成功' })
    } else {
      await mainApi.category.createCategory(values)
      notification.success({ message: '新增分类成功' })
    }
    setVisible(false)
    refresh()
  }

  const fetchCategoryDetail = async (id: string) => {
    setVisible(true)
    const result = await mainApi.category.getCategoryDetail(id)
    form.setFieldsValue(result.data as Categorize)
    setType('edit')
  }

  const removeCategory = (id: string) => {
    console.log(id)
  }

  return (
    <>
      <Space size={20} style={{marginBottom: 16}}>
        <Button
          type='primary'
          icon={<Icon.PlusOutlined />}
          onClick={() => setVisible(true)}
        >创建分类</Button>
        <Button
          danger
          icon={<Icon.DeleteOutlined />}
          disabled={!selectedRowKeys.length}
        >批量删除</Button>
      </Space>
      <Table
        rowKey='_id'
        columns={columns}
        {...tableProps}
        rowSelection={{
          onChange: (selectedRowKeys: React.Key[]) => {
            setSelectedRowKeys(selectedRowKeys)
          }
        }}
      />
      <EditModal
        form={form}
        title={
          type === 'create'
            ? '新建分类'
            : '编辑分类'
        }
        visible={visible}
        onOk={handleSubmit}
        onCancel={() => {
          setVisible(false)
          setType('create')
        }}
      />
    </>
  )
}

export default Category
