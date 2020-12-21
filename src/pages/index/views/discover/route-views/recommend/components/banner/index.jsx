import React, { memo } from 'react'
import { BannerWrapper } from './style'
import { Carousel } from 'antd';

const contentStyle = {
  height: '285px',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

export default memo(function Banner() {
  return (
    <BannerWrapper>
      <div className='container wrap-v2'>
        <div className='banner-carousel'>
          <Carousel effect="fade" >
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </div>

        <div className='banner-download'>
          下载客户端
        </div>
      </div>


    </BannerWrapper>
  )
})
