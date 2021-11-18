import React, { useState, useEffect, useCallback } from 'react'
import { connect, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import {
  Card,
  Form,
  Input,
  Select,
  Space,
  Button,
  Divider,
  Table,
  Tag
} from 'antd'
import { RedoOutlined, DeleteOutlined } from '@ant-design/icons'
import { getArticleList } from '../../api/article'
import { getArticleSyncAction } from '../../store/actions/article'

const { Option } = Select

function Article(props) {

  const { history } = props

  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const page = useSelector(state => state.article.page)
  const pageSize = useSelector(state => state.article.pageSize)
  const total = useSelector(state => state.article.total)
  const articleList = useSelector(state => state.article.articleList)

  const categoryList = useSelector(state => state.category.categoryList)
  const tagList = useSelector(state => state.tag.tagList)

  const onSelectChange = selectedRowKeys => {
    setSelectedRowKeys(selectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  const handlePageChange = useCallback((page, pageSize) => {
    fetchArticle(page, pageSize)
  }, [])

  const fetchArticle = async(page = 1, pageSize = 10, state = 0) => {
    try {
      const result = await getArticleList({page, pageSize, state})
      console.log(result)
      props.getArticleList(result.data)
    } catch (error) {
      return false
    }
  }

  useEffect(() => {
    fetchArticle()
  }, [])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: '分类',
      dataIndex: 'category',
      key: 'category.id',
      render: category => <Tag color={category ? 'green' : 'default'}>
        {category ? category.name : '未分类'}
      </Tag>
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
          <Tag
            color="blue"
            style={{cursor: 'pointer'}}
            onClick={() => {
              history.push(`/content/article/edit/${record._id}`)
            }}
          >编辑</Tag>
          <Tag color="red" style={{cursor: 'pointer'}}>删除</Tag>
        </>
      )
    }
  ]

  return (
    <Card title="文章管理" bordered={false}>
      <Form layout="inline">
        <Form.Item>
          <Input placeholder="输入关键词搜索" style={{ width: 240 }} />
        </Form.Item>
        <Form.Item>
          <Select style={{ width: 180 }} placeholder="选择分类搜索">
            {
              categoryList.map(category => (<Option key={category._id} value={category._id}>{category.name}</Option>
              ))
            }
          </Select>
        </Form.Item>
        <Form.Item>
          <Select style={{ width: 180 }} placeholder="选择标签搜索">
            {
              tagList.map(tag => (<Option key={tag._id} value={tag._id}>{tag.name}</Option>
              ))
            }
          </Select>
        </Form.Item>
      </Form>
      <Space size="middle" style={{marginTop: 15}}>
        <Button type="primary" htmlType="submit">搜索</Button>
        <Button type="dashed" icon={<RedoOutlined />}>重置并刷新</Button>
        <Button type="primary" icon={<DeleteOutlined />} danger>批量删除
        </Button>
      </Space>
      <Divider />
      <Table
        rowKey="_id"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={articleList}
        pagination={{
          showTotal: total => `共 ${total} 条`,
          showSizeChanger: true,
          total,
          current: page,
          pageSize,
          onChange: handlePageChange
        }}
      />
    </Card>
  )
}

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
  getArticleList: article => dispatch(getArticleSyncAction(article))
})

export default connect(mapStateToProps, mapDispatchToProps)(Article)
