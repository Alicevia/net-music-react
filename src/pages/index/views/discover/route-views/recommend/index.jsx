import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import recommendAction from 'store/recommend-module/action'
export default memo(function Recommend() {

  let { fetchUpdateBanners } = recommendAction.recommend
  console.log('banners', recommendAction)

  const dispatch = useDispatch()
  const banners = useSelector(state => {
    return state.getIn(['recommend', 'banners'])
  }, shallowEqual)
  useEffect(() => {
    dispatch(fetchUpdateBanners(['xx']))
  }, [dispatch])
  return (
    <div>
      Recommend
    </div>
  )
})
