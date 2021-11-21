import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, Form, Upload, Input, Button } from 'antd'
import { LoadingOutlined, PlusOutlined, CheckOutlined } from '@ant-design/icons'

function UserInfo() {

  const [form] = Form.useForm()

  const [loading, setLoading] = useState(false)
  const [avatar, setAvatar] = useState('')
  const token = useSelector(state => state.user.token)

  const handleChange = () => {
  }

  return (
    <Card title="个人信息" bordered={false}>
      <Form
        form={form}
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 12 }}
      >
        <Form.Item name="avatarUrl" label="头像">
          {/* <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            headers={{
              authorization: `Bearer ${token}`
            }}
            action="http://localhost:7001/api/v1/upload"
            onChange={handleChange}
          >
            {avatar ? <img src={avatar} alt="avatar" /> : (
              <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 5 }}>点击上传</div>
              </div>
            )}
          </Upload> */}
        </Form.Item>
        <Form.Item name="username" label="用户名">
          <Input />
        </Form.Item>
        <Form.Item name="nickname" label="昵称">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="邮箱">
          <Input />
        </Form.Item>
        <Form.Item name="blogUrl" label="网站">
          <Input />
        </Form.Item>
        <Form.Item name="company" label="公司">
          <Input />
        </Form.Item>
        <Form.Item name="position" label="职位">
          <Input />
        </Form.Item>
        <Form.Item name="location" label="地址">
          <Input />
        </Form.Item>
        <Form.Item name="bio" label="个人简介">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" icon={<CheckOutlined />}>更新</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default UserInfo
