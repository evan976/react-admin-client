import * as React from 'react'
import { Col, Row } from 'antd'
import * as mainApi from '@/api'
import { useReactive } from 'ahooks'
import type { Article, SiteData, IComment } from '@/types'
import Statistics from './Statistics'
import { DashboardPage } from './style'
import LatestArticle from './LatestArticle'
import LatestComment from './LatestComment'

const Dashboard: React.FC = () => {

  const siteData = useReactive<SiteData>({
    category: 0,
    comment: 0,
    post: 0,
    tag: 0
  })

  const [lastestArticle, setLastestArticle] = React.useState<Article[]>([])
  const [lastestComment, setLastestComment] = React.useState<IComment[]>([])

  const getSiteData = async () => {
    const { data } = await mainApi.configService.fetchSiteData()
    siteData.category = data.category
    siteData.comment = data.comment
    siteData.post = data.post
    siteData.tag = data.tag
  }

  const getLatestData = async () => {
    const [article, comment] = await Promise.all([
      mainApi.articleService.findAll({ page: 1, pageSize: 5 }),
      mainApi.commentService.findAll({ page: 1, pageSize: 8 })
    ])
    setLastestArticle(article.data.data || [])
    setLastestComment(comment.data.data || [])
  }


  React.useEffect(() => {
    getSiteData()
    getLatestData()
  }, [])

  return (
    <DashboardPage>
      <Statistics siteData={siteData} />
      <Row justify="start">
        <Col span={12}>
          <LatestArticle data={lastestArticle} />
        </Col>
        <Col span={12}>
          <LatestComment data={lastestComment} />
        </Col>
      </Row>
    </DashboardPage>
  )
}

export default Dashboard
