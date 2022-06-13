import * as React from 'react'
import { useAntdTable, useSafeState } from 'ahooks'
import {
  Button,
  Modal,
  Space,
  Table,
  Tag,
  Typography,
  Image,
  Avatar,
  Form,
  notification,
  Input,
} from 'antd'
import { useSelector } from 'react-redux'
import * as Icon from '@ant-design/icons'
import useTableData from '@/hooks/useTableData'
import SearchForm from './SearchForm'
import type { IComment } from '@/types'
import { commentService } from '@/api'
import type { ColumnsType } from 'antd/lib/table'
import { dateFormat } from '@/utils/dateFormat'
import { cs, ws } from '@/enums'
import * as mainApi from '@/api'

const CommentPage: React.FC = () => {
  const [form] = Form.useForm<IComment>()
  const [getTableData] = useTableData<IComment>(commentService)
  const [visible, setVisible] = useSafeState<boolean>(false)
  const [respondent, setRespondent] = useSafeState<IComment>()
  const [content, setContent] = useSafeState<string>('')
  const { user } = useSelector(state => state.account)

  const { tableProps, search, refresh } = useAntdTable(getTableData, { form })

  const { submit, reset } = search

  const updateCommentStatus = async (id: string, status: number) => {
    await mainApi.commentService.update(id, {
      status
    })
    notification.success({ message: '操作成功' })
    refresh()
  }

  const removeComment = async (id: string) => {
    await mainApi.commentService.remove(id)
    notification.success({ message: '删除评论成功' })
    refresh()
  }

  const replyComment = async () => {
    await mainApi.commentService.create({
      parentId: respondent?.parentId,
      name: user.name,
      email: user.email,
      site: user.siteUrl,
      avatar: user.avatar,
      content,
      replyUserName: respondent?.name,
      replyUserEmail: respondent?.email
    })
    setVisible(false)
    refresh()
  }

  const columns: ColumnsType<IComment> = [
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
      render: (_, comment) => (
        <Tag color='orange'>{comment.postId ?? 'null'}</Tag>
      )
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
                {comment.site || 'null'}
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
              <Icon.GlobalOutlined />
              {comment.ip}
            </Space>
            <Space>
              <Icon.HomeOutlined />
              {comment.address}
            </Space>
            <Space>
              <Icon.DesktopOutlined />
              {comment.os}
            </Space>
            <Space>
              <Icon.ChromeOutlined />
              {comment.browser}
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
            {
              comment.status !== -1 && (
                <Button
                  type="link"
                  onClick={() => {
                    updateCommentStatus(comment.id!, comment.status === 0 ? 1 : 0)
                  }}
                >
                  {comment.status === 0 ? '审核通过' : '退为待审核'}
                </Button>
              )
            }
            <Button
              type="link"
              onClick={() => {
                setVisible(true)
                let pid = comment.parentId
                if (comment.parentId === null) {
                  pid = Number(comment.id)
                }
                setRespondent({
                  ...comment,
                  parentId: pid,
                })
              }}
            >
              回复
            </Button>
            <Button
              type="link"
              onClick={() => {
                Modal.confirm({
                  title: `确定将该评论移${comment.status === -1 ? '出' : '入'}回收站？`,
                  icon: <Icon.QuestionCircleOutlined />,
                  okText: '确认',
                  cancelText: '取消',
                  centered: true,
                  onOk: () => {
                    updateCommentStatus(comment.id!, comment.status === -1 ? 0 : -1)
                  }
                })
              }}
            >
              {comment.status === -1 ? '移出回收站' : '移入回收站'}
            </Button>
            <Button
              type="link"
              danger
              onClick={() => {
                Modal.confirm({
                  title: '此操作将永久删除该评论，是否继续？',
                  icon: <Icon.QuestionCircleOutlined />,
                  okText: '确认',
                  cancelText: '取消',
                  centered: true,
                  onOk: () => {
                    removeComment(comment.id!)
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
      <Modal
        title='回复评论'
        visible={visible}
        onOk={replyComment}
        onCancel={() => {
          setVisible(false)
        }}
        afterClose={() => setContent('')}
        okText="确认"
        cancelText="取消"
      >
        <Input.TextArea
          rows={4}
          placeholder='回复内容'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </Modal>
    </div>
  )
}

export default CommentPage
