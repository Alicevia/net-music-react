import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { HeaderRecWrapper, MusicTypeWrapper } from './style'
const HeaderRec = memo(function (props) {
  let { title, center, dot } = props
  return (
    <HeaderRecWrapper>
      <div className='header-title'>
        {dot ? <span className='dot'></span> : null}
        <a className='title'>{title}</a>
      </div>
      <div className='header-center'>
        <MusicTypeWrapper>
          {center.map(item => (<li key={item} className='music-type'><Link to={`discover/playlist/?cat=${item}`}>{item}</Link></li>))}
        </MusicTypeWrapper>
      </div>
      <div className='header-more'>更多</div>

    </HeaderRecWrapper>
  )
})

HeaderRec.propTypes = {
  title: PropTypes.string.isRequired,
  center: PropTypes.array,
  dot: PropTypes.bool
}

HeaderRec.defaultProps = {
  dot: true,
  title: '标题',
  center: []
}

export default HeaderRec