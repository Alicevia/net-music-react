import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MusicianWrapper } from './style'
import recommendAction from 'store/recommend-module/action'
import { getSizeImage } from '@/utils/format-utils'
export default memo(function Musician() {
  let { fetchHotSinger } = recommendAction.recommend
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHotSinger({ offset: 0, limit: 5 }))
  }, [dispatch])
  const hotSinger = useSelector(state => state.getIn(['recommend', 'hotSinger']))
  console.log('hotSinger', hotSinger)
  const musicianRender = () => {
    return hotSinger && hotSinger.map(item => {
      return <li className='item' key={item.id}>
        <img className='image' src={getSizeImage(item.picUrl, 62)} alt="" />
        <div className='dsc'>
          <h4 className='singer'>{item.name}</h4>
          <p className='singer-desc'>歌手-{item.name}</p>
        </div>
      </li>
    })
  }
  return (
    <MusicianWrapper>
      <div className='header'>
        <h3 className='title'>入住歌手</h3>
        <a className='link' href="">{'查看全部>'}</a>
      </div>
      <ul className='musician-container'>

        {musicianRender()}
      </ul>
      <a className='apply sprite_button' href="">申请成为网易音乐人</a>
    </MusicianWrapper>
  )
})
