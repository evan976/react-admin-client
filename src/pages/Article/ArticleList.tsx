import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge, Button, Form, Modal, notification, Space, Table, Tag } from 'antd'
import * as Icon from '@ant-design/icons'
import { useAntdTable, useSafeState } from 'ahooks'
import type { ColumnsType } from 'antd/lib/table'
import * as mainApi from '@/api'
import useTableData from '@/hooks/useTableData'
import type { Article } from '@/types'
import SearchForm from './SearchForm'
import { os, ps, ws } from '@/enums'
import { articleService } from '@/api'
import { dateFormat } from '@/utils/dateFormat'

const ArticleList: React.FC = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm<Article>()

  const [selectedRowKeys, setSelectedRowKeys] = useSafeState<React.Key[]>([])
  const [getTableData] = useTableData<Article>(articleService)

  const { tableProps, search, refresh } = useAntdTable(getTableData, { form })

  const { submit, reset } = search

  const removeArticle = async (id: string) => {
    await mainApi.articleService.remove(id)
    notification.success({ message: '删除文章成功' })
    refresh()
  }

  const columns: ColumnsType<Article> = [
    {
      title: '标题',
      dataIndex: 'title'
    },
    {
      title: '归类',
      dataIndex: 'summary',
      render(_, article) {
        return (
          <Space direction="vertical">
            {
              <Space size="small">
                <Icon.FolderOpenOutlined />
                {article?.category?.name}
              </Space>
            }
            <Space size="small" wrap={true}>
              {article.tags?.map((tag) => (
                <Tag color={tag.color} icon={<Icon.TagOutlined />} key={tag.id}>
                  {tag.name}
                </Tag>
              ))}
            </Space>
          </Space>
        )
      }
    },
    {
      title: '状态',
      dataIndex: 'status',
      render(_, article) {
        const _state = ps(article.status as number)
        return <Badge color={_state.color} text={_state.name} />
      }
    },
    {
      title: '来源',
      dataIndex: 'origin',
      render(_, article) {
        const _origin = os(article.origin as number)
        return <Tag color={_origin.color}>{_origin.name}</Tag>
      }
    },
    {
      title: '关注',
      dataIndex: 'likes',
      render(_, article) {
        return (
          <Space direction="vertical">
            <Space>
              <span>浏览</span>
              <Tag color="magenta">{article.views}</Tag>
            </Space>
            <Space>
              <span>评论</span>
              <Tag color="cyan">{article.comments}</Tag>
            </Space>
            <Space>
              <span>喜欢</span>
              <Tag color="error">{article.likes}</Tag>
            </Space>
          </Space>
        )
      }
    },
    {
      title: '时间',
      dataIndex: 'createdAt',
      render(_, article) {
        return (
          <Space direction="vertical">
            <span>发布时间: {dateFormat(article.created_at)}</span>
            <span>更新时间: {dateFormat(article.created_at)}</span>
          </Space>
        )
      }
    },
    {
      title: '操作',
      render(_, article) {
        return (
          <Space size={0}>
            <Button
              type="link"
              onClick={() => {
                navigate(`/article/edit/${article.id}`)
              }}
            >编辑</Button>
            <Button
              type="link"
              danger
              onClick={() => {
                Modal.confirm({
                  title: '此操作将永久删除该文章，是否继续？',
                  icon: <Icon.QuestionCircleOutlined />,
                  okText: '确认',
                  cancelText: '取消',
                  centered: true,
                  onOk: () => {
                    removeArticle(article.id!)
                  }
                })
              }}
            >
              删除
            </Button>
          </Space>
        )
      }
    }
  ]

  return (
    <>
      <SearchForm form={form} submit={submit} reset={reset} />
      <Space size={20} style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          icon={<Icon.PlusOutlined />}
          onClick={() => navigate('/article/create')}
        >
          发表文章
        </Button>
        <Button danger icon={<Icon.DeleteOutlined />} disabled={!selectedRowKeys.length}>
          批量删除
        </Button>
      </Space>
      <Table
        columns={columns}
        rowKey="id"
        rowSelection={{
          onChange: (selectedRowKeys: React.Key[]) => {
            setSelectedRowKeys(selectedRowKeys)
          }
        }}
        {...tableProps}
      />
    </>
  )
}

export default ArticleList
