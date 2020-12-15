import React, { memo, useEffect } from 'react'
import { DiscoverWrapper } from './style'
import DiscoverNav from './components/discover-nav'
import { renderRoutes } from 'react-router-config'
import { request } from '@/services/axios'
export default memo(function Discover(props) {
  useEffect(() => {
    request({
      url: '/banner'
    }).then(res => {
      console.log(res)
    })
  }, [])
  const { route } = props
  console.log(props)
  return (
    <DiscoverWrapper>
      <DiscoverNav></DiscoverNav>

      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
