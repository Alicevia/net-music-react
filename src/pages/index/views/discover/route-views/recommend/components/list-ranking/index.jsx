import React, { memo, useEffect, useState } from 'react'
import { ListRakingWrapper } from './style'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import HeaderRec from 'components/header-rec'
import ListRankingRec from 'components/list-ranking-rec'
import recommendAction from 'store/recommend-module/action'
export default memo(function ListRanking() {
  let { fetchListRanking } = recommendAction.recommend
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchListRanking({ idx: 0 }))
    dispatch(fetchListRanking({ idx: 2 }))
    dispatch(fetchListRanking({ idx: 3 }))
  }, [dispatch])
  const { upRanking, newRanking, originRanking } = useSelector(state => (
    {
      upRanking: state.getIn(['recommend', 'upRanking']),
      newRanking: state.getIn(['recommend', 'newRanking']),
      originRanking: state.getIn(['recommend', 'originRanking']),
    }
  ), shallowEqual)

  return (
    <ListRakingWrapper>
      <HeaderRec title='榜单' ></HeaderRec>
      <div className='list-ranking'>
        <div className='item'><ListRankingRec info={upRanking}></ListRankingRec></div>
        <div className='item'><ListRankingRec info={newRanking}></ListRankingRec></div>
        <div className='item'><ListRankingRec info={originRanking}></ListRankingRec></div>
      </div>
    </ListRakingWrapper>
  )
})
