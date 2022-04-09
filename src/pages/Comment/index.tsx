import * as React from 'react'
import { useAntdTable } from 'ahooks'
import { Button, Modal, Space, Table, Tag, Typography, Image, Avatar, Form } from 'antd'
import * as Icon from '@ant-design/icons'
import useTableData from '@/hooks/useTableData'
import SearchForm from './SearchForm'
import type { Comment } from '@/types/comment'
import { commentService } from '@/api'
import type { ColumnsType } from 'antd/lib/table'
import { dateFormat } from '@/utils/dateFormat'
import { cs, ws } from '@/enums'

const CommentPage: React.FC = () => {
  const [form] = Form.useForm<Comment>()
  const [getTableData] = useTableData<Comment>(commentService)

  const { tableProps, search } = useAntdTable(getTableData, { form })

  const { submit, reset } = search

  const columns: ColumnsType<Comment> = [
    {
      title: 'ID',
      width: 80,
      dataIndex: 'id'
    },
    {
      title: 'PID',
      width: 80,
      dataIndex: 'parentId',
      render: (_, comment) => (
        <Tag color='geekblue'>{comment.parentId ?? 'null'}</Tag>
      )
    },
    {
      title: 'POST_ID',
      width: 80,
      dataIndex: 'postId',
    },
    {
      title: '内容',
      width: 220,
      dataIndex: 'content',
    },
    {
      title: '个人信息',
      width: 240,
      dataIndex: 'name',
      render: (_, comment) => {
        return (
          <Space direction="vertical">
            <Space>
              <span>头像</span>
              <Avatar src={<Image src={comment.avatar} style={{ width: 32 }} />} />
            </Space>
            <Space>
              <span>姓名</span>
              <Typography.Text type='secondary'>{comment.name}</Typography.Text>
            </Space>
            <Space>
              <span>邮箱</span>
              <Typography.Text type='danger'>{comment.email}</Typography.Text>
            </Space>
            <Space>
              <span>网站</span>
              <Typography.Link
                href={comment.site}
                target="_blank"
              >
                {comment.site}
              </Typography.Link>
            </Space>
          </Space>
        )
      }
    },
    {
      title: '状态',
      width: 180,
      dataIndex: 'weight',
      render: (_, comment) => {
        const _status = cs(comment.status as number)
        const _weight = ws(comment.weight as number)
        return (
          <Space direction="vertical">
            <Space>
              <span>状态</span>
              <Tag color={_status.color}>{_status.name}</Tag>
            </Space>
            <Space>
              <span>权重</span>
              <Tag color={_weight.color}>{_weight.name}</Tag>
            </Space>
          </Space>
        )
      }
    },
    {
      title: '发布于',
      dataIndex: 'createdAt',
      render(_, comment) {
        return (
          <Space direction="vertical">
            <Space>
              <Icon.ClockCircleOutlined />
              {dateFormat(comment.updatedAt)}
            </Space>
            <Space>
              <Icon.ClockCircleOutlined />
              {dateFormat(comment.updatedAt)}
            </Space>
            <Space>
              <Icon.ClockCircleOutlined />
              {dateFormat(comment.updatedAt)}
            </Space>
            <Space>
              <Icon.ClockCircleOutlined />
              {dateFormat(comment.updatedAt)}
            </Space>
          </Space>
        )
      }
    },
    {
      title: '操作',
      render(_, comment) {
        return (
          <Space direction="vertical">
            <Space>
              <Button
                type="link"
                onClick={() => {console.log()}}
              >
                评论详情
              </Button>
            </Space>
            <Space>
              <Button
                type="link"
                onClick={() => {console.log()}}
              >
                回复
              </Button>
            </Space>
            <Button
              type="link"
              onClick={() => {console.log()}}
            >
              回收站
            </Button>
            <Button
              type="link"
              danger
              onClick={() => {
                Modal.confirm({
                  title: '此操作将永久删除该广告，是否继续？',
                  icon: <Icon.QuestionCircleOutlined />,
                  okText: '确认',
                  cancelText: '取消',
                  centered: true,
                  onOk: () => {
                    console.log()
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
    <div>
      <SearchForm form={form} submit={submit} reset={reset} />
      <Table
        rowKey='id'
        columns={columns}
        {...tableProps}
      />
    </div>
  )
}

export default CommentPage
