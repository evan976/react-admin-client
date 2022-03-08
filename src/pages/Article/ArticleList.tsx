import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge, Button, Form, Space, Table, Tag } from 'antd'
import * as Icon from '@ant-design/icons'
import { useAntdTable, useSafeState } from 'ahooks'
import type { ColumnsType } from 'antd/lib/table'
import * as mainApi from '@/api'
import { Article, ArticleList } from '@/types/article'
import { RequestParams } from '@/utils/request'
import SearchForm from './SearchForm'
import { os, ps, ws } from '@/enums'
import { dateFormat } from '@/utils/dateFormat'

interface Result {
  total: number
  list: Article[]
}

const getTableData = async ({}, formData: RequestParams): Promise<Result> => {
  const res = await mainApi.article.getArticleList(formData)
  return ({
    total: res.data?.total as number,
    list: res.data?.data as Article[]
  })
}

const ArticleList: React.FC = () => {

  const navigate = useNavigate()
  const [form] = Form.useForm()

  const [selectedRowKeys, setSelectedRowKeys] = useSafeState<React.Key[]>([])

  const { tableProps, search } = useAntdTable(getTableData, {
    defaultPageSize: 12,
    form
  })

  const { submit, reset } = search

  const columns: ColumnsType<Article> = [
    {
      title: '标题',
      dataIndex: 'title'
    },
    {
      title: '归类',
      dataIndex: 'updated_at',
      render(_, article) {
        return (
          <Space direction='vertical'>
            {
              <Space size='small'>
              <Icon.FolderOpenOutlined />
              {article?.category?.name}
            </Space>
            }
            <Space size='small' wrap={true}>
              {article?.tags?.map((tag) => (
                <Tag icon={<Icon.TagOutlined />} key={tag._id}>
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
      dataIndex: 'state',
      render(_, article) {
        const _state = ps(article.state as number)
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
      title: '权重',
      dataIndex: 'weight',
      render(_, article) {
        const _weight = ws(article.weight as number)
        return <Tag color={_weight.color}>{_weight.name}</Tag>
      }
    },
    {
      title: '关注',
      dataIndex: 'meta',
      render(_, article) {
        return (
          <Space direction='vertical'>
            <span>浏览数量：{article.meta?.views}</span>
            <span>评论数量：{article.meta?.comments}</span>
          </Space>
        )
      }
    },
    {
      title: '时间',
      dataIndex: 'created_at',
      render(_, article) {
        return (
          <Space direction='vertical'>
            <span>最新发布时间：{dateFormat(article.created_at)}</span>
            <span>最后修改时间：{dateFormat(article.updated_at)}</span>
          </Space>
        )
      },
    },
    {
      title: '操作',
      render(_, article) {
        return (
          <Space size={0}>
            <Button type='link'>编辑</Button>
            <Button type='link' danger>删除</Button>
          </Space>
        )
      }
    }
  ]

  return (
    <div>
      <SearchForm form={form} submit={submit} reset={reset}  />
      <Space size={20} style={{marginBottom: 16}}>
        <Button
          type='primary'
          icon={<Icon.PlusOutlined />}
          onClick={() => navigate('/article/create')}
        >发表文章</Button>
        <Button
          danger
          icon={<Icon.DeleteOutlined />}
          disabled={!selectedRowKeys.length}
        >批量删除</Button>
      </Space>
      <Table
        columns={columns}
        rowKey='_id'
        rowSelection={{
          onChange: (selectedRowKeys: React.Key[]) => {
            setSelectedRowKeys(selectedRowKeys)
          }
        }}
        {...tableProps}
      />
    </div>
  )
}

export default ArticleList
