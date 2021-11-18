import React from 'react'
import { connect, useSelector } from 'react-redux'
import {
  Card,
  Space,
  Button,
  Divider,
  Table,
  Tag
} from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { getCategorySyncAction } from '../../store/actions/category'

function Category() {
  return (
    <Card title="文章管理" bordered={false}>
      <Space size="large">
        <Button type="primary" icon={<PlusOutlined />}>新增分类</Button>
        <Button type="primary" icon={<DeleteOutlined />} danger>批量删除</Button>
      </Space>
      <Divider />
    </Card>
  )
}

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
  getCategoryList: category => dispatch(getCategorySyncAction(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)
