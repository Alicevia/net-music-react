import React, { memo } from 'react'
import { Wrapper } from './style'
import PropTypes from 'prop-types'
import ImageCover from 'components/image-cover'

const ListRankingRec = memo(function (props) {
  let { info = {} } = props
  console.log('info', info)
  const listRender = () => {
    return info.tracks && info.tracks.slice(0, 10).map((item, index) => {
      return <li key={item.id} className='list-item'>
        <span className='num'>{index + 1}</span>
        <a className='song' href="">{item.name}</a>
        <div className='ctrl'>
          <a className='icon sprite_02 play' href=""></a>
          <a className='icon sprite_icon2 plus' href=""></a>
          <a className='icon sprite_02 favorite' href=""></a>
        </div>
      </li>
    })
  }
  return (
    <Wrapper>
      <div className='top'>
        <ImageCover src={info.coverImgUrl} imageCoverClassName={'sprite_cover'} coverPosition={'-145px -57px'}></ImageCover>
        <div className='dsc-container'>
          <a className='title' href="">{info.name}</a>
          <div className='ctrl'>
            <a className='icon sprite_02 play' href=""></a>
            <a className='icon sprite_02 favorite' href=""></a>
          </div>
        </div>
      </div>
      <ul className='list'>
        {listRender()}
      </ul>
      <a className='more' href="">{'查看更多>'}</a>
    </Wrapper>
  )
})
ListRankingRec.propTypes = {
  info: PropTypes.object.isRequired
}
ListRankingRec.defaultProps = {
  info: {}
}

export default ListRankingRec