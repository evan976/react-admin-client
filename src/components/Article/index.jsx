import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Editor } from '@bytemd/react'
import { Form, Row, Col, Input, Button, Select, Space, Drawer, Upload } from 'antd'
import {
  LoadingOutlined,
  PlusOutlined,
  CheckOutlined
} from '@ant-design/icons'
import gfm from '@bytemd/plugin-gfm'
import gemoji from '@bytemd/plugin-gemoji'
import highlight from '@bytemd/plugin-highlight-ssr'
import zhHans from 'bytemd/lib/locales/zh_Hans.json'
import 'bytemd/dist/index.min.css'
import 'highlight.js/styles/vs.css'
import './style.css'

const plugins = [gfm(), gemoji(), highlight()]

const { Option } = Select

function EditorArticle() {

  const token = useSelector(state => state.user.token)

  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [visible, setVisible] = useState(false)
  const [thumb, setThumb] = useState('')

  // 图片上传
  const handleChange = useCallback(info => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      setThumb(info.file.response.data.url)
      setLoading(false)
    }
  }, [])

  const onFinish = values => {
    const data = { ...values, title, content, thumb }
    console.log(data)
  }

  return (
    <div className="edit-article">
      <Form
        layout="inline"
        style={{margin: 10}}>
        <Row style={{ width: '100%' }} wrap>
          <Col span={21}>
            <Form.Item name="title">
              <Input
                style={{border: 'none'}}
                placeholder="请输入文章标题..."
                className="title-input"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col style={{ flex: 1 }}>
            <Form.Item>
              <Button
                type="primary"
                onClick={() => setVisible(true)}
              >
               发布
              </Button>
              <Button
                type="dashed"
                style={{marginLeft: 10}}
              >
               取消
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Editor
        style={{height: 500}}
        locale={zhHans}
        value={content}
        plugins={plugins}
        onChange={c => setContent(c)}
      />
      <Drawer
        title="发布选项"
        width={500}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="keywords"
            label="关键词"
          >
            <Select mode="tags" allowClear placeholder="输入关键词后回车">
            </Select>
          </Form.Item>
          <Form.Item
            name="category"
            label="分类"
            rules={[
              {
                required: true,
                message: '请选择一个分类'
              }
            ]}
          >
            <Select placeholder="选择分类">
              <Option value="1">Vue</Option>
              <Option value="2">React</Option>
              <Option value="3">Node</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="tags"
            label="标签"
            rules={[
              {
                required: true,
                message: '请至少选择一个标签'
              }
            ]}
          >
            <Select mode="tags" allowClear placeholder="选择分类">
              <Option value="1">Vue</Option>
              <Option value="2">React</Option>
              <Option value="3">Node</Option>
            </Select>
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="origin"
                label="文章来源"
              >
                <Select placeholder="选择文章来源">
                  <Option value="0">原创</Option>
                  <Option value="1">转载</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="state"
                label="发布状态"
              >
                <Select placeholder="选择文章状态">
                  <Option value="0">草稿</Option>
                  <Option value="1">直接发布</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="缩略图">
            <Upload
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
              {thumb ? <img src={thumb} alt="thumb" style={{ width: '100%', height: '100%' }} /> : (
                <div>
                  {loading ? <LoadingOutlined /> : <PlusOutlined />}
                  <div style={{ marginTop: 5 }}>点击上传</div>
                </div>
              )}
            </Upload>
            <Input placeholder="或直接输入图片地址" value={thumb} onChange={e => setThumb(e.target.value)}/>
          </Form.Item>
          <Form.Item name="description" label="文章简介">
            <Input.TextArea rows={4} placeholder="输入文章简介..."/>
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="dashed" onClick={() => setVisible(false)}>取消</Button>
              <Button type="primary" htmlType="submit" icon={<CheckOutlined />}>直接发布</Button>
            </Space>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  )
}

export default EditorArticle
