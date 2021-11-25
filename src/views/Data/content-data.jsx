import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'antd'

import OverviewData from '../../components/OverviewData'
import useChart from '../../hooks/use-charts'

function ContentData() {

  const chartRef = useRef(null)

  const options = {
    xAxis: {
      type: 'category',
      data: ['11-17', '11-18', '11-19', '11-20', '11-21', '11-22', '11-23']
    },
    yAxis: {
      type: 'value',
      data: [0, 0.2, 0.4, 0.6, 0.8, 1]
    },
    series: [
      {
        data: [0.2, 0.1, 0.4, 0.3, 0.6, 0.8, 0.5],
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#1E7DFA',
          width: 2
        }
      }
    ]
  }

  useChart(chartRef, options)

  const articleData = useSelector(state => state.article.articleList)
  const categoryData = useSelector(state => state.category.categoryList)

  return (
    <>
      <OverviewData
        title="内容数据"
        bordered={false}
        articleData={articleData}
        categoryData={categoryData}
      />
      <Card title="数据趋势"
        style={{ marginTop: 16 }}
        bordered={false}
      >
        <div style={{width: '100%', height: 400}} ref={chartRef}></div>
      </Card>
    </>
  )
}

export default ContentData
