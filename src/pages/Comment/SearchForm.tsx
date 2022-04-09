import * as React from 'react'
import { Button, Col, Form, FormInstance, Row, Select } from 'antd'
import * as Icon from '@ant-design/icons'
import { commentStates, weightStates } from '@/enums'

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
              <Select onChange={props.submit} placeholder='评论状态查询'>
                {
                  commentStates.map(item => (
                    <Select.Option value={item.value} key={item.name}>
                      {item.name}
                    </Select.Option>
                  ))
                }
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name='weight'>
              <Select onChange={props.submit} placeholder='评论权重查询'>
                {
                  weightStates.map(item => (
                    <Select.Option value={item.value} key={item.name}>
                      {item.name}
                    </Select.Option>
                  ))
                }
              </Select>
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
