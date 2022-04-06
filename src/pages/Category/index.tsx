import * as React from 'react'
import { Button, Table, Space, Form, Modal, notification } from 'antd'
import * as Icon from '@ant-design/icons'
import { useAntdTable, useSafeState } from 'ahooks'
import { ColumnsType } from 'antd/lib/table'
import * as mainApi from '@/api'
import { Category } from '@/types/category'
import { TableResult } from '@/types'
import { dateFormat } from '@/utils/dateFormat'
import EditModal from './EditModal'

const getTableData = async (
  { current, pageSize }: Record<string, string | number>
): Promise<TableResult<Category>> => {
  const query = {
    page: current,
    pageSize
  }
  const res = await mainApi.categoryService.findAll(query)
  return {
    total: res.data?.total as number,
    list: res.data?.data as Category[]
  }
}

const Category: React.FC = () => {
  const [form] = Form.useForm<Category>()
  const [type, setType] = useSafeState<'create' | 'edit'>('create')
  const [visible, setVisible] = useSafeState<boolean>(false)
  const [selectedRowKeys, setSelectedRowKeys] = useSafeState<React.Key[]>([])
  const [background, setBackground] = useSafeState<string>('')

  const { tableProps, refresh } = useAntdTable(getTableData)

  const columns: ColumnsType<Category> = [
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
      dataIndex: 'postCount'
    },
    {
      title: '时间',
      dataIndex: 'createdAt',
      render(_, category) {
        return (
          <Space direction="vertical">
            <span>发布时间: {dateFormat(category.createdAt)}</span>
            <span>更新时间: {dateFormat(category.updatedAt)}</span>
          </Space>
        )
      }
    },
    {
      title: '操作',
      width: 220,
      render: (_, category) => (
        <>
          <Button type="link" onClick={() => fetchCategoryDetail(category.id!)}>
            编辑
          </Button>
          <Button
            type="link"
            danger
            onClick={() => {
              Modal.confirm({
                title: '此操作将永久删除该分类，是否继续？',
                icon: <Icon.QuestionCircleOutlined />,
                okText: '确认',
                cancelText: '取消',
                centered: true,
                onOk: () => {
                  removeCategory(category.id!)
                }
              })
            }}
          >
            删除
          </Button>
        </>
      )
    }
  ]

  const handleSubmit = async () => {
    const id = form.getFieldValue('id')
    const values = { ...form.getFieldsValue(), background }
    if (id) {
      await mainApi.categoryService.update(id, values)
      notification.success({ message: '修改分类成功' })
    } else {
      await mainApi.categoryService.create(values)
      notification.success({ message: '新增分类成功' })
    }
    setVisible(false)
    refresh()
  }

  const fetchCategoryDetail = async (id: string) => {
    setVisible(true)
    const result = await mainApi.categoryService.findOne(id)
    form.setFieldsValue(result.data as Category)
    setBackground(result.data.background)
    setType('edit')
  }

  const removeCategory = async (id: string) => {
    await mainApi.categoryService.remove(id)
    notification.success({ message: '删除分类成功' })
    refresh()
  }

  return (
    <>
      <Space size={20} style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          icon={<Icon.PlusOutlined />}
          onClick={() => {
            setVisible(true)
            form.resetFields()
            setBackground('')
          }}
        >
          创建分类
        </Button>
        <Button
          danger
          icon={<Icon.DeleteOutlined />}
          disabled={!selectedRowKeys.length}
        >
          批量删除
        </Button>
      </Space>
      <Table
        rowKey="id"
        columns={columns}
        {...tableProps}
        rowSelection={{
          onChange: (selectedRowKeys: React.Key[]) => {
            setSelectedRowKeys(selectedRowKeys)
          }
        }}
      />
      <Modal
        title={type === 'create' ? '新建分类' : '编辑分类'}
        visible={visible}
        onOk={handleSubmit}
        onCancel={() => {
          setVisible(false)
          setType('create')
        }}
        afterClose={() => form.resetFields()}
        okText="确认"
        cancelText="取消"
      >
        <EditModal
          form={form}
          value={background}
          setValue={(v) => setBackground(v)}
        />
      </Modal>
    </>
  )
}

export default Category
