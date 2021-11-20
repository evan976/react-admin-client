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
  Tag,
  message,
  Modal
} from 'antd'
import { RedoOutlined, DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { getArticleList, removeArticle } from '../../api/article'
import { getArticleSyncAction } from '../../store/actions/article'

const { Option } = Select
const { confirm } = Modal

function Article(props) {

  const { history } = props

  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const page = useSelector(state => state.article.page)
  const pageSize = useSelector(state => state.article.pageSize)
  const total = useSelector(state => state.article.total)
  const articleList = useSelector(state => state.article.articleList)
  const categoryList = useSelector(state => state.category.categoryList)

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
          <Tag
            color="red"
            style={{cursor: 'pointer'}}
            onClick={() => {
              confirm({
                title: '此操作将永久删除该文章，是否继续？',
                icon: <QuestionCircleOutlined />,
                okText: '确认',
                cancelText: '取消',
                centered: true,
                onOk: async() => {
                  try {
                    await removeArticle(record._id)
                    let _page = page
                    if (articleList.length === 1 && _page > 1) {
                      _page -= 1
                    }
                    fetchArticle(_page, pageSize)
                    message.success('文章删除成功！')
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
          <Space size="middle">
            <Button type="primary" htmlType="submit">搜索</Button>
            <Button type="dashed" icon={<RedoOutlined />}>重置并刷新</Button>
            <Button type="primary" icon={<DeleteOutlined />} danger>批量删除
            </Button>
          </Space>
        </Form.Item>
      </Form>
      <Divider />
      <Table
        rowKey="_id"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={articleList}
        pagination={{
          size: 'small',
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
