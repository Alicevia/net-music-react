import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MusicianWrapper } from './style'
import recommendAction from 'store/recommend-module/action'
import { getSizeImage } from '@/utils/format-utils'
export default memo(function HotAnchor() {
  let { fetchHotAnchor } = recommendAction.recommend
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHotAnchor({ limit: 5 }))
  }, [dispatch])
  const hotAnchor = useSelector(state => state.getIn(['recommend', 'hotAnchor']))
  console.log('hotAnchor', hotAnchor)
  const hotAnchorRender = () => {
    return hotAnchor && hotAnchor.map(item => {
      return <li className='item' key={item.id}>
        <img className='image' src={getSizeImage(item.avatarUrl, 62)} alt="" />
        <div className='dsc'>
          <h4 className='singer'>{item.nickName}</h4>
          <p className='singer-desc'>主播-{item.nickName}</p>
        </div>
      </li>
    })
  }
  return (
    <MusicianWrapper>
      <div className='header'>
        <h3 className='title'>热门主播</h3>
        <a className='link' href="">{'查看全部>'}</a>
      </div>
      <ul className='musician-container'>
        {hotAnchorRender()}
      </ul>
    </MusicianWrapper>
  )
})
