import React from 'react'
import { Carousel } from 'antd'

export default props => {

  const { thumb } = props

  return (
    <Carousel autoplay>
      {
        thumb.map(item => (
          <div key={item._id}>
            <img src={item.thumb} alt={item.title} style={{height: 220, width: '100%'}} />
          </div>
        ))
      }
    </Carousel>
  )
}
