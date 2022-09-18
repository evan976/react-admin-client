import * as React from 'react'
import { Button, Col, Form, Input, notification, Row, Select } from 'antd'
import AwesomeUpload from '@/components/Upload'
import * as mainApi from '@/api'
import { Container } from './styles/option.style'

const SiteOption: React.FC = () => {

  const layout = { labelCol: { span: 4 }, wrapperCol: { span: 16 } }

  const [form] = Form.useForm()
  const [logo, setLogo] = React.useState('')
  const [favicon, setFavicon] = React.useState('')
  const [description, setDescription] = React.useState('')

  const getSiteOption = async () => {
    const { result } = await mainApi.configService.fetchSiteConfig()
    form.setFieldsValue(result)
    setLogo(result.logo)
    setFavicon(result.favicon)
    setDescription(result.description)
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
      <Form {...layout} form={form}>
        <Row justify="start">
          <Col span={10}>
            <Form.Item name='title' label='站点标题' rules={[{ required: true, message: '请输入站点标题' }]}>
              <Input placeholder='请输入站点标题' />
            </Form.Item>
            <Form.Item name='sub_title' label='站点副标题'>
              <Input placeholder='请输入站点副标题' />
            </Form.Item>
            <Form.Item name='copyright' label='copyright'>
              <Input placeholder='请输入站点copyright' />
            </Form.Item>
            <Form.Item name='icp' label='ICP备案号'>
              <Input placeholder='请输入ICP备案号' />
            </Form.Item>
            <Form.Item name='icp_url' label='备案号链接'>
              <Input placeholder='请输入备案号链接' />
            </Form.Item>
            <Form.Item name='site_url' label='站点链接'>
              <Input placeholder='请输入站点链接' />
            </Form.Item>
            <Form.Item name='keywords' label='站点关键词'>
              <Select mode='tags'></Select>
            </Form.Item>
          </Col>
          <Col span={12}>
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
            <Button
              type='primary'
              style={{ marginTop: 10 }}
              onClick={handleSubmit}
            >保存</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default SiteOption
