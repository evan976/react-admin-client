import * as React from 'react'
import * as Icon from '@ant-design/icons'
import { Button, Col, Drawer, Form, FormInstance, Input, Row, Select, Space, Tag } from 'antd'
import { useSafeState } from 'ahooks'
import CustomUpload from '@/components/Upload'

type Props = {
  visible: boolean
  setVisible: (v: boolean) => void
  form: FormInstance<any>
  onFinish: () => void
}

const PublishOption: React.FC<Props> = (props) => {

  const [selectedTags, setSelectedTags] = useSafeState<string[]>([])

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag)
    setSelectedTags(nextSelectedTags)
  }

  return (
    <Drawer
      title="发布选项"
      width={500}
      onClose={() => props.setVisible(false)}
      visible={props.visible}
    >
      <Form
        form={props.form}
        layout="vertical"
        onFinish={props.onFinish}
      >
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
            <Select.Option value={'1'}>111</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="tags"
          label="标签"
        >
          <Tag.CheckableTag
            style={{ border: '1px dashed #ccc' }}
            checked={selectedTags.indexOf('111') > -1}
            onChange={(cheacked) => handleChange('111', cheacked)}
          >
            111
          </Tag.CheckableTag>
          <Tag.CheckableTag
            style={{ border: '1px dashed #ccc' }}
            checked={selectedTags.indexOf('222') > -1}
            onChange={(cheacked) => handleChange('222', cheacked)}
          >
            222
          </Tag.CheckableTag>
        </Form.Item>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="origin"
              label="文章来源"
            >
              <Select placeholder="选择文章来源">
                <Select.Option value={0}>转载</Select.Option>
                <Select.Option value={1}>原创</Select.Option>
                <Select.Option value={2}>混合</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="status"
              label="发布状态"
            >
              <Select placeholder="选择文章状态">
                <Select.Option value={0}>草稿</Select.Option>
                <Select.Option value={1}>直接发布</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="weight" label="权重">
              <Select placeholder="选择文章权重">
                <Select.Option value={0}>无权重</Select.Option>
                <Select.Option value={1}>热门</Select.Option>
                <Select.Option value={2}>推荐</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="缩略图">
          <CustomUpload value={''} setValue={function (value: string): void {
            throw new Error('Function not implemented.')
          }} />
        </Form.Item>
        <Form.Item name="description" label="文章简介">
          <Input.TextArea rows={4} placeholder="输入文章简介..." />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button
              type="dashed"
              onClick={() => props.setVisible(false)}
            >
              取消
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              icon={<Icon.CheckOutlined />}
            >
              确定
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Drawer>
  )
}

export default PublishOption
