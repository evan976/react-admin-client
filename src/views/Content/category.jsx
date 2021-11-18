import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import {
  Card,
  Space,
  Button,
  Divider,
  Table,
  Tag
} from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { getCategoryList } from '../../api/category'
import { getCategorySyncAction } from '../../store/actions/category'

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
    render: text => dayjs(text).format('YYYY-MM-DD HH:mm:ss')
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <>
        <Tag color="blue">编辑</Tag>
        <Tag color="red">删除</Tag>
      </>
    )
  }
]

function Category(props) {

  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const categoryList = useSelector(state => state.category.categoryList)

  const onSelectChange = selectedRowKeys => {
    setSelectedRowKeys(selectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  const fetchCategory = async() => {
    try {
      const result = await getCategoryList()
      console.log(result)
      props.getCategoryList(result.data)
    } catch (error) {
      return false
    }
  }

  useEffect(() => {
    fetchCategory()
  }, [])

  return (
    <Card title="分类管理" bordered={false}>
      <Space size="large">
        <Button type="primary" icon={<PlusOutlined />}>新增分类</Button>
        <Button type="primary" icon={<DeleteOutlined />} danger>批量删除</Button>
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
  )
}

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
  getCategoryList: category => dispatch(getCategorySyncAction(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)
