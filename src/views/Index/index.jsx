import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'antd'

import { Wrapper } from './index.styles'
import Swiper from '../../components/Swiper'
import OverviewData from '../../components/OverviewData'

function Index() {

  const articleData = useSelector(state => state.article.articleList)
  const categoryData = useSelector(state => state.category.categoryList)

  return (
    <Wrapper>
      <Card bordered={false}>
        <Swiper thumb={articleData}></Swiper>
      </Card>
      <OverviewData
        title="数据概览"
        bordered={false}
        articleData={articleData}
        categoryData={categoryData}
      />
    </Wrapper>
  )
}

export default Index
