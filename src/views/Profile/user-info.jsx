import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Form, Upload, Input, Button, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

import { getUserInfo, updateUserInfo } from '../../api/user'
import { setUserInfoSyncAction } from '../../store/actions/user'

function UserInfo() {

  const [form] = Form.useForm()
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState('')
  const token = useSelector(state => state.user.token)
  const profile = useSelector(state => state.user.profile)

  const fetchUserInfo = async() => {
    if (profile) {
      form.setFieldsValue(profile)
      setAvatarUrl(profile.avatarUrl)
    } else {
      const result = await getUserInfo()
      form.setFieldsValue(result.data)
      setAvatarUrl(result.data.avatarUrl)
    }
  }

  const handleUpdate = useCallback(async user => {
    const data = { ...user, avatarUrl }
    await updateUserInfo(user._id, data)
    message.success('用户信息更新成功')
    dispatch(setUserInfoSyncAction(data))
  }, [avatarUrl])

  const handleChange = useCallback(info => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      setAvatarUrl(info.file.response.data.url)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUserInfo()
  }, [])

  return (
    <Card title="个人信息" bordered={false}>
      <Form
        form={form}
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 12 }}
        onFinish={handleUpdate}
      >
        <Form.Item name="_id" hidden>
          <Input />
        </Form.Item>
        <Form.Item label="头像">
          <Upload
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            headers={{
              authorization: `Bearer ${token}`
            }}
            action="http://localhost:7001/api/v1/upload"
            onChange={handleChange}
          >
            {avatarUrl
              ? <img
                src={avatarUrl}
                alt="avatar"
                style={{width: '100%', height: '100%'}}/>
              : (
                <div>
                  {loading ? <LoadingOutlined /> : <PlusOutlined />}
                  <div style={{ marginTop: 5 }}>点击上传</div>
                </div>
              )
            }
          </Upload>
        </Form.Item>
        <Form.Item name="username" label="用户名">
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item name="nickname" label="昵称">
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item name="email" label="邮箱">
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item name="blogUrl" label="网站">
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item name="company" label="公司">
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item name="position" label="职位">
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item name="location" label="地址">
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item name="bio" label="个人简介">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">更新</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default UserInfo
