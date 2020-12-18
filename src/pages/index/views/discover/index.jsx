import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DiscoverWrapper } from './style'
import DiscoverNav from './components/discover-nav'
import { renderRoutes } from 'react-router-config'
import { request } from '@/services/axios'
import recommendAction from 'store/recommend-module/action'
export default memo(function Discover(props) {
  let { fetchUpdateBanners } = recommendAction.recommend
  const dispatch = useDispatch()
  const banners = useSelector(state => {
    console.log(state)
    return state.recommend.banners
  })
  console.log('banners', banners)
  useEffect(() => {
    dispatch(fetchUpdateBanners(['xx']))
  }, [dispatch])
  const { route } = props
  return (
    <DiscoverWrapper>
      <DiscoverNav></DiscoverNav>
      {banners.length}
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
