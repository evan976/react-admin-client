import React from 'react'
import { Card, Row, Col } from 'antd'

export default props => {

  const { title, bordered, articleData, categoryData } = props

  return (
    <Card
      title={title}
      bordered={bordered}
    >
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <p>总文章数</p>
            <h2>{articleData.length || 0}</h2>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <p>总分类数</p>
            <h2>{categoryData.length || 0}</h2>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <p>总评论数</p>
            <h2>0</h2>
          </Card>
        </Col>
      </Row>
    </Card>
  )
}
