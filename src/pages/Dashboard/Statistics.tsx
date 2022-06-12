import * as React from 'react'
import { Card, Col, Row, Typography } from 'antd'
import { SiteData } from '@/types/config'
import data from '@/assets/images/data.png'
import data2 from '@/assets/images/data2.png'
import data3 from '@/assets/images/data3.png'
import data4 from '@/assets/images/data4.png'
import { Container } from './style'

const Statistics: React.FC<{ siteData: SiteData }> = ({ siteData }) => {
  return (
    <Container>
      <Typography.Title level={5}>数据统计</Typography.Title>
      <Row justify="start" className='dashboard-row'>
        <Col span={6}>
          <Card
            className='article'
            bordered={false}
          >
            <div className='statistic'>
              <Typography.Title level={5}>文章总量</Typography.Title>
              <Typography.Text>{siteData.post}</Typography.Text>
            </div>
            <img src={data} />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            className='category'
            bordered={false}
          >
            <div className='statistic'>
              <Typography.Title level={5}>分类总量</Typography.Title>
              <Typography.Text>{siteData.category}</Typography.Text>
            </div>
            <img src={data2} />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            className='tag'
            bordered={false}
          >
            <div className='statistic'>
              <Typography.Title level={5}>标签总量</Typography.Title>
              <Typography.Text>{siteData.tag}</Typography.Text>
            </div>
            <img src={data3} />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            className='comment'
            bordered={false}
          >
            <div className='statistic'>
              <Typography.Title level={5}>评论总量</Typography.Title>
              <Typography.Text>{siteData.comment}</Typography.Text>
            </div>
            <img src={data4} />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Statistics
