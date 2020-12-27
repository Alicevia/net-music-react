import React, { memo } from 'react'
import { Wrapper } from './style'
export default memo(function ImageCover(props) {
  let { imageCoverClassName = 'sprite_cover', src = '', coverPosition = '-145px -57px' } = props
  return (
    <Wrapper coverPosition={coverPosition}>
      <img className='image' src={src} alt="" />
      <a className={`image-cover ${imageCoverClassName}`} href=""></a>
    </Wrapper>
  )
})
