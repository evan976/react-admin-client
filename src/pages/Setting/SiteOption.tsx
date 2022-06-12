import * as React from 'react'
import { Button, Col, Form, Input, notification, Row, Select, Typography } from 'antd'
import { Editor } from '@bytemd/react'
import gfm from '@bytemd/plugin-gfm'
import gemoji from '@bytemd/plugin-gemoji'
import highlight from '@bytemd/plugin-highlight-ssr'
import zhHans from 'bytemd/locales/zh_Hans.json'
import AwesomeUpload from '@/components/Upload'
import * as mainApi from '@/api'
import 'bytemd/dist/index.min.css'
import 'highlight.js/styles/vs.css'
import { Container } from './styles/option.style'

const plugins = [
  gfm(),
  gemoji(),
  highlight({})
]

const SiteOption: React.FC = () => {

  const layout = { labelCol: { span: 4 }, wrapperCol: { span: 16 } }

  const [form] = Form.useForm()
  const [logo, setLogo] = React.useState('')
  const [favicon, setFavicon] = React.useState('')
  const [description, setDescription] = React.useState('')

  const getSiteOption = async () => {
    const { data } = await mainApi.configService.fetchSiteConfig()
    form.setFieldsValue(data)
    setLogo(data.logo!)
    setFavicon(data.favicon!)
    setDescription(data.description!)
  }

  const handleSubmit = async () => {
    const values = { ...form.getFieldsValue(), logo, favicon, description }
    await mainApi.configService.updateSiteConfig(values)
    notification.success({ message: '更新成功' })
    getSiteOption()
  }

  React.useEffect(() => {
    getSiteOption()
  }, [])

  return (
    <Container>
      <Row justify="start">
        <Col span={12}>
          <Form {...layout} form={form}>
            <Form.Item name='title' label='站点标题' rules={[{ required: true, message: '请输入站点标题' }]}>
              <Input placeholder='请输入站点标题' />
            </Form.Item>
            <Form.Item name='subTitle' label='站点副标题'>
              <Input placeholder='请输入站点副标题' />
            </Form.Item>
            <Form.Item name='copyright' label='copyright'>
              <Input placeholder='请输入站点copyright' />
            </Form.Item>
            <Form.Item name='icp' label='ICP备案号'>
              <Input placeholder='请输入ICP备案号' />
            </Form.Item>
            <Form.Item name='icpUrl' label='备案号链接'>
              <Input placeholder='请输入备案号链接' />
            </Form.Item>
            <Form.Item name='siteUrl' label='站点链接'>
              <Input placeholder='请输入站点链接' />
            </Form.Item>
            <Form.Item name='keywords' label='站点关键词'>
              <Select mode='tags'></Select>
            </Form.Item>
            <Form.Item label='站点Logo'>
              <AwesomeUpload
                value={logo}
                setValue={setLogo}
                className='avatar-upload'
              />
            </Form.Item>
            <Form.Item label='站点Favicon'>
              <AwesomeUpload
                value={favicon}
                setValue={setFavicon}
                className='avatar-upload'
              />
            </Form.Item>
            <Form.Item name='summary' label='站点描述'>
              <Input.TextArea placeholder='请输入站点描述' />
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <Typography.Text>前端站点描述（about 页面）</Typography.Text>
          <div style={{marginTop: 10}}>
            <Editor
              value={description}
              locale={zhHans}
              plugins={plugins}
              onChange={(v) => setDescription(v)}
            />
          </div>
          <Button
            type='primary'
            style={{marginTop: 10}}
            onClick={handleSubmit}
          >保存</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default SiteOption
