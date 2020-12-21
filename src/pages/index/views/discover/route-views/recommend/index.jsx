import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import recommendAction from 'store/recommend-module/action'
import Banner from './components/banner'

export default memo(function Recommend() {

  let { fetchUpdateBanners } = recommendAction.recommend
  const dispatch = useDispatch()
  const banners = useSelector(state => {
    return state.getIn(['recommend', 'banners'])
  }, shallowEqual)
  useEffect(() => {
    dispatch(fetchUpdateBanners())
  }, [dispatch])
  return (
    <div>
      <Banner></Banner>
    </div>
  )
})
