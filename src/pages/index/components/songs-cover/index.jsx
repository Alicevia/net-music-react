import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SongWrapper } from './style'
const SongsCover = memo(function (props) {
  let { songInfo } = props
  const computedNum = (num) => {
    num = parseInt(num)
    return Math.floor(num / 10000) + '万'
  }
  return (
    <SongWrapper>
      <div className='song-img'>
        <img className='image' src={songInfo.picUrl} alt="" />
        <a className='image-cover' href=""></a>
        <div className='image-control'>
          <span className='icon'></span>
          <span className='num'>{computedNum(songInfo.playCount)}</span>
          <a className='play' href=""></a>
        </div>
      </div>
      <div className='song-dsc'>
        <a href="" className='song-link'>{songInfo.name}</a>
      </div>
    </SongWrapper>
  )
})
SongsCover.propTypes = {
  songInfo: PropTypes.object.isRequired
}

export default SongsCover
