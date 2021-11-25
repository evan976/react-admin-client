import { useEffect } from 'react'
import * as echarts from 'echarts'

function useChart(ref, options) {
  let customChart = null

  function renderChart() {
    const chart = echarts.getInstanceByDom(ref.current)
    if (chart) {
      customChart = chart
    } else {
      customChart = echarts.init(ref.current)
    }
    customChart.setOption(options)
  }

  useEffect(() => {
    renderChart()
  }, [options])

  useEffect(() => () => {
    customChart && customChart.dispose()
  }, [])

  return
}

export default useChart
