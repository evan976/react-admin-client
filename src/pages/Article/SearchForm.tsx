import * as React from 'react'
import { Button, Col, Form, FormInstance, Input, Row, Select } from 'antd'
import * as Icon from '@ant-design/icons'
import { originStates, publishStates } from '@/enums'

type Props = {
  form: FormInstance<any>
  submit: () => void
  reset: () => void
}

const SearchForm: React.FC<Props> = props => {
  return (
    <Form form={props.form}>
      <Row gutter={24}>
        <Col span={4}>
          <Form.Item name='status'>
            <Select onChange={props.submit} placeholder='文章状态查询'>
              {
                publishStates.map(item => (
                  <Select.Option value={item.value} key={item.name}>
                    {item.name}
                  </Select.Option>
                ))
              }
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name='origin'>
            <Select onChange={props.submit} placeholder='文章来源查询'>
              {
                originStates.map(item => (
                  <Select.Option value={item.value} key={item.name}>
                    {item.name}
                  </Select.Option>
                ))
              }
            </Select>
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item name='keyword'>
            <Input.Search
              placeholder="关键词查询"
              onSearch={props.submit}
              enterButton
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item>
            <Button onClick={props.reset} icon={<Icon.RedoOutlined />}>
              重置
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchForm
