import * as React from 'react'
import * as Icon from '@ant-design/icons'
import { Button, Col, Drawer, Form, FormInstance, Input, Row, Select, Space } from 'antd'
import { useRequest } from 'ahooks'
import AwesomeUpload from '@/components/Upload'
import * as mainApi from '@/api'
import { originStates, publishStates, weightStates } from '@/enums'
import { Tag as ITag } from '@/types/tag'

type Props = {
  visible: boolean
  setVisible: (v: boolean) => void
  thumb: string
  setThumb: (thumb: string) => void
  tags: Array<string>
  setTags: (value: Array<string>) => void
  category: string
  setCategory: (value: string) => void
  form: FormInstance<any>
  onFinish: (values: any) => void
}

const PublishOption: React.FC<Props> = (props) => {

  const { data: tags } = useRequest(mainApi.tagService.findAll)
  const { data: categories } = useRequest(mainApi.categoryService.findAll)

  const handleClick = (tag: ITag, checked: boolean) => {
    const id = tag.id!
    const ids = checked ? [...props.tags, id] : props.tags.filter((t) => t !== id)
    props.setTags(ids)
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
          label="分类"
          rules={[
            {
              required: true,
              message: '请选择一个分类'
            }
          ]}
        >
          <Space wrap={true} size={[12, 12]}>
            {
              categories?.data.data?.map((category) => {
                const isChecked = props.category === category.id
                return (
                  <Button
                    key={category.id}
                    size="small"
                    type={isChecked ? 'primary' : 'default'}
                    icon={isChecked ? <Icon.CheckCircleOutlined /> : <Icon.TagOutlined />}
                    onClick={() => props.setCategory(category.id!)}
                  >
                    {category.name}
                  </Button>
                )
              })
            }
          </Space>
        </Form.Item>
        <Form.Item
          label="标签"
        >
          <Space wrap={true} size={[12, 12]}>
            {
              tags?.data.map((tag) => {
                const isChecked = props.tags.includes(tag.id!)
                return (
                  <Button
                    key={tag.id}
                    size="small"
                    type={isChecked ? 'primary' : 'default'}
                    icon={isChecked ? <Icon.CheckCircleOutlined /> : <Icon.TagOutlined />}
                    onClick={() => handleClick(tag, !isChecked)}
                  >
                    {tag.name}
                  </Button>
                )
              })
            }
          </Space>
        </Form.Item>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="origin"
              label="文章来源"
            >
              <Select placeholder="选择文章来源">
                {
                  originStates.map(item => (
                    <Select.Option
                      key={item.value}
                      value={item.value}
                    >
                      {item.name}
                    </Select.Option>
                  ))
                }
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="status"
              label="发布状态"
            >
              <Select placeholder="选择文章状态">
                {
                  publishStates.map(item => (
                    <Select.Option
                      key={item.value}
                      value={item.value}
                    >
                      {item.name}
                    </Select.Option>
                  ))
                }
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="weight" label="权重">
              <Select placeholder="选择文章权重">
                {
                  weightStates.map(item => (
                    <Select.Option
                      key={item.value}
                      value={item.value}
                    >
                      {item.name}
                    </Select.Option>
                  ))
                }
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="缩略图">
          <AwesomeUpload
            value={props.thumb}
            setValue={props.setThumb}
          />
        </Form.Item>
        <Form.Item name="summary" label="文章简介">
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
