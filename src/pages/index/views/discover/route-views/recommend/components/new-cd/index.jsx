import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NewCDWrapper } from './style'
import HeaderRec from 'components/header-rec'
import recommendAction from 'store/recommend-module/action'
import { Carousel } from 'antd';
import AlbumCover from 'components/album-cover'
export default memo(function NewCD() {
  let { fetchNewAlbum } = recommendAction.recommend
  const album = useSelector(state => {
    return state.getIn(['recommend', 'album'])
  }, shallowEqual)
  const bannerRef = useRef()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchNewAlbum({ limit: 10 }))
  }, [dispatch])
  const albumRender = () => {
    return [0, 1].map(_ => {
      return (
        <div key={_}>
          <ul className='album-content' >
            {
              album.slice(_ * 5, (_ + 1) * 5).map(item => {
                return <li className='item' key={item.id}>
                  <AlbumCover info={item}></AlbumCover>
                </li>
              })
            }
          </ul>
        </div>
      )

    })
  }
  return (
    <NewCDWrapper>
      <HeaderRec title='新碟上架' ></HeaderRec>
      <div className='album'>
        <Carousel ref={bannerRef}>
          {albumRender()}

        </Carousel>
      </div>
      <a onClick={e => { e.preventDefault(); bannerRef.current.prev() }} className='banner-btn left' href="#"></a>
      <a onClick={e => { e.preventDefault(); bannerRef.current.next() }} className='banner-btn right' href="#"></a>

    </NewCDWrapper >
  )
})
