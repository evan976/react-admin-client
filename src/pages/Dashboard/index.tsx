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
    article: 0,
    tag: 0
  })

  const [lastestArticle, setLastestArticle] = React.useState<Article[]>([])
  const [lastestComment, setLastestComment] = React.useState<IComment[]>([])

  const getSiteData = async () => {
    const { result } = await mainApi.configService.fetchSiteData()
    siteData.category = result.category
    siteData.comment = result.comment
    siteData.article = result.article
    siteData.tag = result.tag
  }

  const getLatestData = async () => {
    const [article, comment] = await Promise.all([
      mainApi.articleService.findAll({ page_size: 5 }),
      mainApi.commentService.findAll({ page_size: 5 })
    ])
    setLastestArticle(article.result.data || [])
    setLastestComment(comment.result.data || [])
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
