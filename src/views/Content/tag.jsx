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
import { getTagList } from '../../api/tag'
import { getTagSyncAction } from '../../store/actions/tag'

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
    key: 'name',
    render: text => <Tag>{text}</Tag>
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

function TagPage(props) {

  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const tagList = useSelector(state => state.tag.tagList)

  const onSelectChange = selectedRowKeys => {
    setSelectedRowKeys(selectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  const fetchTag = async() => {
    try {
      const result = await getTagList()
      console.log(result)
      props.getTagList(result.data)
    } catch (error) {
      return false
    }
  }

  useEffect(() => {
    fetchTag()
  }, [])

  return (
    <Card title="标签管理" bordered={false}>
      <Space size="large">
        <Button type="primary" icon={<PlusOutlined />}>新增标签</Button>
        <Button type="primary" icon={<DeleteOutlined />} danger>批量删除</Button>
      </Space>
      <Divider />
      <Table
        rowKey="_id"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={tagList}
        pagination={false}
      />
    </Card>
  )
}

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
  getTagList: tag => dispatch(getTagSyncAction(tag))
})

export default connect(mapStateToProps, mapDispatchToProps)(TagPage)
