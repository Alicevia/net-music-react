import React, { memo } from 'react'
import { MainWrapper } from './style'
import NewCD from '../new-cd'
import Hot from '../hot/index'
import ListRanking from '../list-ranking'
import LoginRec from '../login-rec'
import Musician from '../musician'
import HotAnchor from '../hot-anchor'
export default memo(function Main() {
  return (
    <MainWrapper>
      <div className='container wrap-v2'>
        <div className='left-container'>
          <Hot></Hot>
          <NewCD></NewCD>
          <ListRanking></ListRanking>
        </div>
        <div className='right-container'>
          <LoginRec></LoginRec>
          <Musician></Musician>
          <HotAnchor></HotAnchor>
        </div>
      </div>

    </MainWrapper>
  )
})
