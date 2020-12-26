import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { AlbumCoverWrapper } from './style'
const AlbumCover = memo(function (props) {
  const { info } = props
  return (
    <AlbumCoverWrapper>
      <div className='image-content'>
        <img className='image' src={info.picUrl} alt="" />
        <a className='cover' href=""></a>
      </div>
      <div className='dsc-content'>
        <p className='title'>{info.name}</p>
        <a className='artist' href="">{info.artist.name}</a>
      </div>
    </AlbumCoverWrapper>
  )
})
AlbumCover.propTypes = {
  info: PropTypes.object.isRequired
}
AlbumCover.defaultProps = {
  info: {}
}
export default AlbumCover