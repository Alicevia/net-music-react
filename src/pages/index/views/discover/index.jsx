import React, { memo, useEffect } from 'react'
import { DiscoverWrapper } from './style'
import DiscoverNav from './components/discover-nav'
import { renderRoutes } from 'react-router-config'

export default memo(function Discover(props) {

  const { route } = props
  return (
    <DiscoverWrapper>
      <DiscoverNav></DiscoverNav>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
