import * as React from 'react'
import { Table, Typography } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import type { Article } from '@/types'
import LocaleTime from '@/components/LocaleTime'

const LatestArticle: React.FC<{ data: Article[] }> = ({ data }) => {

  const columns: ColumnsType<Article> = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '发布时间',
      dataIndex: 'createdAt',
      render: (_, article) => (
        <LocaleTime date={article.createdAt!} form={false} />
      )
    },
  ]

  return (
    <div className='latest-article'>
      <Typography.Title level={5}>最新文章</Typography.Title>
      <Table
        rowKey='id'
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  )
}

export default LatestArticle
