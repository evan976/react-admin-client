import React, { useEffect } from 'react'
import { Card, Form, Input, Button, Select, message } from 'antd'

import { getSiteOption, updateSiteOption } from '../../api/option'

function SiteOption() {

  const [form] = Form.useForm()

  const fetchSiteOption = async() => {
    const result = await getSiteOption()
    form.setFieldsValue(result.data)
  }

  const onFinish = async values => {
    await updateSiteOption(values._id, values)
    message.success('站点配置更新成功')
    fetchSiteOption()
  }

  useEffect(() => {
    fetchSiteOption()
  }, [])

  return (
    <Card title="站点配置" bordered={false}>
      <Form
        form={form}
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 12 }}
        onFinish={onFinish}
      >
        <Form.Item name="_id" hidden>
          <Input />
        </Form.Item>
        <Form.Item name="title" label="网站标题">
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item name="subTitle" label="网站副标题">
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item name="keywords" label="关键词">
          <Select mode="tags"></Select>
        </Form.Item>
        <Form.Item name="siteUrl" label="站点地址">
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item name="siteIcp" label="备案号">
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item name="description" label="站点描述">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">更新</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default SiteOption
