import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeaderRec from 'components/header-rec'
import { HotWrapper } from './style'
import recommendAction from 'store/recommend-module/action'
export default memo(function Hot() {
  let keyword = ['华语', '流行', '摇滚', '民谣', '电子']
  let { fetchHotRec } = recommendAction.recommend

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHotRec({ limit: 8 }))
  }, [dispatch])
  const hotRec = useSelector(state => state.getIn(['recommend', 'hotRec']))
  console.log(hotRec)
  return (
    <HotWrapper>
      <HeaderRec title='热门推荐' center={keyword}></HeaderRec>
    </HotWrapper>
  )
})
