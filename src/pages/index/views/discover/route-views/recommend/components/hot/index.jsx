import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HeaderRec from 'components/header-rec'
import { HotWrapper } from './style'
import recommendAction from 'store/recommend-module/action'
import SongsCover from 'components/songs-cover'
export default memo(function Hot() {
  let keyword = ['华语', '流行', '摇滚', '民谣', '电子']
  let { fetchHotRec } = recommendAction.recommend
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHotRec({ limit: 8 }))
  }, [dispatch])
  const hotRec = useSelector(state => state.getIn(['recommend', 'hotRec']), shallowEqual)
  console.log(hotRec)
  const songListRender = () => {
    return hotRec.map(item => {
      return <li className='song-item' key={item.id}><SongsCover songInfo={item}></SongsCover></li>
    })
  }
  return (
    <HotWrapper>
      <HeaderRec title='热门推荐' center={keyword}></HeaderRec>
      <ul className='song-list' >
        {songListRender()}
      </ul>
    </HotWrapper>
  )
})
