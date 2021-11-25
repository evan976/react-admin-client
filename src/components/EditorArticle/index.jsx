import React, { useState, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Editor } from '@bytemd/react'
import {
  Form,
  Row,
  Col,
  Input,
  Button,
  Select,
  Space,
  Drawer,
  Upload,
  Switch,
  message
} from 'antd'
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

import { createArticle, getArticleDetail, updateArticle } from '../../api/article'
import { Wrapper } from './edit.styles'

const plugins = [gfm(), gemoji(), highlight()]

const { Option } = Select

function EditorArticle(props) {

  const { match: { params } } = props

  const [form] = Form.useForm()

  const token = useSelector(state => state.user.token)
  const categoryList = useSelector(state => state.category.categoryList)

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

  const onFinish = useCallback(async values => {
    const data = { ...values, title, content, thumb }
    try {
      if (!params.id) {
        await createArticle(data)
        message.success('文章发布成功！')
      } else {
        await updateArticle(params.id, data)
        message.success('文章修改成功！')
      }
      setVisible(false)
    } catch (error) {
      message.error('操作失败，请稍后尝试！')
    }
  }, [title, content, thumb])

  useEffect(async() => {
    if (params.id) {
      const result = await getArticleDetail(params.id)
      form.setFieldsValue(result.data)
      setContent(result.data.content)
      setThumb(result.data.thumb)
      setTitle(result.data.title)
    }
  }, [])

  return (
    <Wrapper>
      <Form
        layout="inline"
        form={form}
        style={{margin: 10}}>
        <Row style={{ width: '100%' }} wrap>
          <Col span={21}>
            <Form.Item name="title">
              <Input
                style={{border: 'none'}}
                placeholder="文章标题..."
                className="title-input"
                value={title}
                size="large"
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
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            name="keywords"
            label="关键词"
          >
            <Select
              allowClear
              mode="tags"
              placeholder="输入关键词后回车"
            >
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
              {
                categoryList.map(category => (
                  <Option
                    key={category._id}
                    value={category._id}
                  >
                    {category.name}</Option>
                ))
              }
            </Select>
          </Form.Item>
          <Form.Item
            name="tags"
            label="标签"
          >
            <Select
              allowClear
              mode="tags"
              placeholder="输入标签后回车"
            >
            </Select>
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="origin"
                label="文章来源"
              >
                <Select placeholder="选择文章来源">
                  <Option value={0}>转载</Option>
                  <Option value={1}>原创</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="state"
                label="发布状态"
              >
                <Select placeholder="选择文章状态">
                  <Option value={0}>草稿</Option>
                  <Option value={1}>直接发布</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="缩略图">
            <Upload
              listType="picture-card"
              showUploadList={false}
              headers={{
                authorization: `Bearer ${token}`
              }}
              action="http://localhost:7001/api/v1/upload"
              onChange={handleChange}
            >
              {thumb
                ? <img src={thumb} alt="thumb" style={{ width: '100%', height: '100%' }} />
                : (
                  <div>
                    {loading ? <LoadingOutlined /> : <PlusOutlined />}
                    <div style={{ marginTop: 5 }}>点击上传</div>
                  </div>
                )
              }
            </Upload>
            <Input
              value={thumb}
              placeholder="或直接输入图片地址"
              onChange={e => setThumb(e.target.value)}
            />
          </Form.Item>
          <Form.Item name="description" label="文章简介">
            <Input.TextArea rows={4} placeholder="输入文章简介..."/>
          </Form.Item>
          <Form.Item name="hot" label="热门" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button
                type="dashed"
                onClick={() => setVisible(false)}
              >
                取消
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                icon={<CheckOutlined />}
              >
                直接发布
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Drawer>
    </Wrapper>
  )
}

export default EditorArticle
