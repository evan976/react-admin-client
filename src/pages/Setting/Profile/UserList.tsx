import * as React from 'react'
import { Button, Col, Form, notification, Row, Space, Table, Tag } from 'antd'
import * as mainApi from '@/api'
import { QueryParams } from '@/api/types'
import { TableResult } from '@/types'
import { UserInfo } from '@/types/user'
import { useAntdTable, useSafeState } from 'ahooks'
import { ColumnsType } from 'antd/lib/table'
import { dateFormat } from '@/utils/dateFormat'
import UpdatePasswordModal from './UpdatePasswordModal'

const getTableData = async ({}, formData: QueryParams): Promise<TableResult<UserInfo>> => {
  const res = await mainApi.userService.findAll(formData)
  return {
    total: res.data?.total as number,
    list: res.data?.data as UserInfo[]
  }
}

const UserList: React.FC = () => {
  const [passwordForm] = Form.useForm()
  const [id, setId] = useSafeState<string>('')
  const [showPasswordModal, setShowPasswordModal] = useSafeState<boolean>(false)
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
      render: (_, user) => (
        <img src={user.avatar} alt="avatar" style={{ width: '32px', height: '32px' }} />
      )
    },
    {
      title: '邮箱',
      dataIndex: 'email'
    },
    {
      title: '权限',
      dataIndex: 'role',
      render: (_, user) => (
        <Tag color={user.role === 'admin' ? 'blue' : 'default'}>
          {user.role === 'admin' ? '管理员' : '普通用户'}
        </Tag>
      )
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      render: (_, user) => <div>{dateFormat(user.createdAt)}</div>
    },
    {
      title: '操作',
      render(_, user) {
        return (
          <Space size={0}>
            <Button type="link">编辑</Button>
            <Button
              type="link"
              onClick={() => {
                setId(user.id as string)
                setShowPasswordModal(true)
              }}
            >
              修改密码
            </Button>
            <Button type="link" danger>
              删除
            </Button>
          </Space>
        )
      }
    }
  ]

  const handleSubmit = async () => {
    const values = passwordForm.getFieldsValue()
    if (values.newPassword !== values.relNewPassword) {
      notification.error({ message: '两次输入密码不一致' })
      return false
    }
    await mainApi.userService.updatePassword(id, values)
    setShowPasswordModal(false)
    notification.success({ message: '修改密码成功' })
  }

  return (
    <>
      <Row gutter={24} style={{ marginBottom: '16px' }}>
        <Col span={2}>
          <Button type="primary">添加用户</Button>
        </Col>
      </Row>
      <Table rowKey="id" columns={columns} {...tableProps} />
      <UpdatePasswordModal
        visible={showPasswordModal}
        form={passwordForm}
        onOk={handleSubmit}
        onCancel={() => setShowPasswordModal(false)}
      />
    </>
  )
}

export default UserList
