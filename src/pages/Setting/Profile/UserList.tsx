import * as React from 'react'
import { Button, Col, Row, Table } from 'antd'
import * as mainApi from '@/api'
import { QueryParams } from '@/api/types'
import { TableResult } from '@/types'
import { UserInfo } from '@/types/user'
import { useAntdTable } from 'ahooks'
import { ColumnsType } from 'antd/lib/table'

const getTableData = async ({}, formData: QueryParams): Promise<TableResult<UserInfo>> => {
  const res = await mainApi.userService.findAll(formData)
  return {
    total: res.data?.total as number,
    list: res.data?.data as UserInfo[]
  }
}

const UserList: React.FC = () => {
  const { tableProps } = useAntdTable(getTableData, { defaultPageSize: 12 })

  const columns: ColumnsType<UserInfo> = [
    {
      title: 'id',
      dataIndex: 'id'
    },
    {
      title: '用户名',
      dataIndex: 'name'
    },
    {
      title: '头像',
      dataIndex: 'avatar',
      render: (_, user) => {
        return <img src={user.avatar} alt="avatar" style={{ width: '32px', height: '32px' }} />
      }
    },
    {
      title: '邮箱',
      dataIndex: 'email'
    },
    {
      title: '权限',
      dataIndex: 'role'
    }
  ]
  return (
    <>
      <Row gutter={24} style={{ marginBottom: '16px' }}>
        <Col span={4}>
          <Button type="primary">添加用户</Button>
        </Col>
        <Col span={4}>
          <Button>更新信息</Button>
        </Col>
        <Col span={4}>
          <Button danger>修改密码</Button>
        </Col>
      </Row>
      <Table rowKey="id" columns={columns} {...tableProps} />
    </>
  )
}

export default UserList
