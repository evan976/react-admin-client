import React from 'react'
import { Card, Form, Input, Select, Space, Button, Divider, Table, Tag } from 'antd'

const { Option } = Select

const columns = [
  {
    title: 'ID',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>
  },
  {
    title: '标题',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '归类',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: '时间',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green'
          if (tag === 'loser') {
            color = 'volcano'
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    )
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Tag color="green">Invite {record.name}</Tag>
        <Tag color="red">Delete</Tag>
      </Space>
    )
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

function Article() {
  return (
    <Card title="文章管理" bordered={false}>
      <Form layout="inline">
        <Form.Item>
          <Input placeholder="输入关键词搜索" style={{ width: 220 }} />
        </Form.Item>
        <Form.Item>
          <Select style={{ width: 160 }} placeholder="选择分类搜索">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Select style={{ width: 160 }} placeholder="选择标签搜索">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
            <Button type="dashed">重置并刷新</Button>
            <Button type="primary" danger>
              导出数据
            </Button>
          </Space>
        </Form.Item>
      </Form>
      <Divider />
      <Table columns={columns} dataSource={data} />
    </Card>
  )
}

export default Article
