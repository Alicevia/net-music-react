import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SongWrapper } from './style'
import { getCount, getSizeImage } from '@/utils/format-utils'
const SongsCover = memo(function (props) {
  let { songInfo, imageSize = 140 } = props

  return (
    <SongWrapper>
      <div className='song-img'>
        <img className='image' src={getSizeImage(songInfo.picUrl, imageSize)} alt="" />
        <a className='image-cover' href=""></a>
        <div className='image-control'>
          <span className='icon'></span>
          <span className='num'>{getCount(songInfo.playCount)}</span>
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
