import * as React from 'react'
import { Button, Col, Form, Modal, notification, Row, Space, Table, Tag } from 'antd'
import * as Icon from '@ant-design/icons'
import * as mainApi from '@/api'
import type { UserInfo } from '@/types/user'
import type { ColumnsType } from 'antd/lib/table'
import { useAntdTable, useSafeState } from 'ahooks'
import { dateFormat } from '@/utils/dateFormat'
import UpdatePasswordModal from './UpdatePasswordModal'
import CreateUserModal from './createUserModal'
import useTableData from '@/hooks/useTableData'
import { userService } from '@/api'
import EditUserInfoModal from './EditUserInfoModal'
import { accountApi } from '@/store/features/acountSlice'

const UserList: React.FC = () => {
  const [passwordForm] = Form.useForm()
  const [userForm] = Form.useForm()
  const [editForm] = Form.useForm()
  const [id, setId] = useSafeState<string>('')
  const [avatar, setAvatar] = useSafeState<string>('')
  const [showPasswordModal, setShowPasswordModal] = useSafeState<boolean>(false)
  const [showCreateUserModal, setShowCreateUserModal] = useSafeState<boolean>(false)
  const [showEditUserModal, setShowEditUserModal] = useSafeState<boolean>(false)

  const [getTableData] = useTableData<UserInfo>(userService)
  const { tableProps, refresh } = useAntdTable(getTableData)

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
      render: (_, user) => <img src={user.avatar} alt="avatar" style={{ width: '48px' }} />
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
            <Button
              type="link"
              onClick={() => {
                editForm.setFieldsValue(user)
                setId(user.id!)
                setAvatar(user.avatar!)
                setShowEditUserModal(true)
              }}
            >
              编辑
            </Button>
            <Button
              type="link"
              onClick={() => {
                setId(user.id as string)
                setShowPasswordModal(true)
              }}
            >
              修改密码
            </Button>
            <Button
              type="link"
              danger
              onClick={() => {
                Modal.confirm({
                  title: '此操作将永久删除该用户，是否继续？',
                  icon: <Icon.QuestionCircleOutlined />,
                  okText: '确认',
                  cancelText: '取消',
                  centered: true,
                  onOk: () => {
                    removeUser(user.id!)
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

  const createUser = async () => {
    const values = userForm.getFieldsValue()
    await mainApi.userService.create(values)
    setShowCreateUserModal(false)
    notification.success({ message: '添加用户成功' })
    refresh()
  }

  const editUser = async () => {
    const values = { ...editForm.getFieldsValue(), avatar }
    await mainApi.userService.update(id, values)
    await accountApi.refreshUserInfo()
    setShowEditUserModal(false)
    notification.success({ message: '修改用户信息成功' })
    refresh()
  }

  const removeUser = async (id: string) => {
    await mainApi.userService.remove(id)
    notification.success({ message: '删除用户成功' })
    refresh()
  }

  return (
    <>
      <Row gutter={24} style={{ marginBottom: '16px' }}>
        <Col span={2}>
          <Button type="primary" onClick={() => setShowCreateUserModal(true)}>添加用户</Button>
        </Col>
      </Row>
      <Table rowKey="id" columns={columns} {...tableProps} />
      <CreateUserModal
        form={userForm}
        visible={showCreateUserModal}
        onOk={createUser}
        onCancel={() => setShowCreateUserModal(false)} />
      <UpdatePasswordModal
        visible={showPasswordModal}
        form={passwordForm}
        onOk={handleSubmit}
        onCancel={() => setShowPasswordModal(false)}
      />
      <EditUserInfoModal
        visible={showEditUserModal}
        avatar={avatar}
        setAvatar={setAvatar}
        form={editForm}
        onOk={editUser}
        onCancel={() => setShowEditUserModal(false)}
      />
    </>
  )
}

export default UserList
