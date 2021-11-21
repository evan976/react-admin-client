import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Divider, Row, Col } from 'antd'

function ContentData() {

  const articleNums = useSelector(state => state.article.articleList)
  const categoryNums = useSelector(state => state.category.categoryList)

  return (
    <>
      <Card title="内容数据" bordered={false}>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <p>总文章数</p>
              <h2>{articleNums.length || 0}</h2>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <p>总分类数</p>
              <h2>{categoryNums.length || 0}</h2>
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
      <Divider />
      <Card title="数据趋势"
        style={{ marginTop: 16 }}
        bordered={false}
      >
        数据趋势
      </Card>
    </>
  )
}

export default ContentData
