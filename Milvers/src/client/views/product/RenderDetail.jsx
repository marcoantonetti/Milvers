import React from 'react'

export const RenderDetail = () => {
  return (
    <div className='render-detail flex'>

        <div onMouseMove={() => zoomIn()} className="render-image-container">
            <img className='render-image' src="/images/black_rock1.jpg" alt="" />
        </div>

        <div className="render-info">
            <div className='title-detail-container'>
            <p className="info-title txt-center"> lorem10Lorem ipsum dolor sit amet. </p>
            <p className="info-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam placeat omnis rem minus magni esse at officia animi officiis neque.</p>
            </div>
        </div>
    </div>
  )
}
