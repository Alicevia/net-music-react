import React, { memo, useEffect, useCallback, useRef, useState } from 'react'
import { BannerWrapper } from './style'
import { Carousel } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import recommendAction from 'store/recommend-module/action'

export default memo(function Banner() {
  const [autoPlay, setAutoPlay] = useState(false)
  const bannerRef = useRef()
  let { fetchUpdateBanners } = recommendAction.recommend
  const dispatch = useDispatch()
  const banners = useSelector(state => {
    return state.getIn(['recommend', 'banners'])
  }, shallowEqual)
  useEffect(() => {
    dispatch(fetchUpdateBanners())
  }, [dispatch])

  useEffect(() => {//当banners内有值的时候轮播才开始
    if (banners.length > 0) {
      setAutoPlay(true)
    }
  }, [banners])

  // 跟换高斯模糊背景
  // 记录当前的图片是哪一张
  const [currentIndex, setCurrentIndex] = useState(0)
  // 切换之前找到下一张图片
  const beforeChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to)
    });
  }, [])

  const blurBG = banners[currentIndex] && (banners[currentIndex].imageUrl + "?imageView&blur=40x20")


  const renderBanner = () => {
    return banners.map(item => {
      return (
        <div className='carousel-item' key={item.imageUrl}>
          <img className='carousel-img' src={item.imageUrl} alt="" />
        </div>
      )
    })
  }
  return (
    <BannerWrapper blurBG={blurBG}>
      <div className='container wrap-v2'>
        <div className='banner-carousel'>
          <Carousel beforeChange={beforeChange} autoplay={autoPlay} ref={bannerRef} effect="fade" >
            {renderBanner()}
          </Carousel>
        </div>
        <div className='banner-download'>
          <a className='download-link' href="https://music.163.com/#/download"></a>
          <p className='download-text'>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
        <a onClick={e => { e.preventDefault(); bannerRef.current.prev() }} className='banner-btn left' href="#"></a>
        <a onClick={e => { e.preventDefault(); bannerRef.current.next() }} className='banner-btn right' href="#"></a>
      </div>
    </BannerWrapper>
  )
})
