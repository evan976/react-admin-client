import React from 'react'
import { Card, Form, Input, Button } from 'antd'
import { CheckOutlined } from '@ant-design/icons'

function SiteOption() {
  return (
    <Card title="站点配置" bordered={false}>
      <Form
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 12 }}
      >
        <Form.Item name="title" label="网站标题">
          <Input />
        </Form.Item>
        <Form.Item name="subTitle" label="网站副标题">
          <Input />
        </Form.Item>
        <Form.Item name="keywords" label="关键词">
          <Input />
        </Form.Item>
        <Form.Item name="siteUrl" label="站点地址">
          <Input />
        </Form.Item>
        <Form.Item name="siteIcp" label="备案号">
          <Input />
        </Form.Item>
        <Form.Item name="description" label="站点描述">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" icon={<CheckOutlined />}>更新</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default SiteOption
