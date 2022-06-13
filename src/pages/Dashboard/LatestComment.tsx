import * as React from 'react'
import { Table, Tag, Typography } from 'antd'
import { IComment } from '@/types'
import { ColumnsType } from 'antd/lib/table'
import LocaleTime from '@/components/LocaleTime'
import { useSelector } from 'react-redux'

const LatestComment: React.FC<{ data: IComment[] }> = ({ data }) => {

  const { user } = useSelector(state => state.account)

  const columns: ColumnsType<IComment> = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '内容',
      dataIndex: 'content',
    },
    {
      title: '作者',
      dataIndex: 'name',
      render: (_, comment) => (
        <Tag color={user.name === comment.name ? 'blue' : 'success'}>{comment.name}</Tag>
      )
    },
    {
      title: '评论时间',
      dataIndex: 'createdAt',
      render: (_, comment) => (
        <LocaleTime date={comment.createdAt!} />
      )
    },
  ]

  return (
    <>
      <Typography.Title level={5}>最近评论</Typography.Title>
      <Table
        rowKey='id'
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </>
  )
}

export default LatestComment
