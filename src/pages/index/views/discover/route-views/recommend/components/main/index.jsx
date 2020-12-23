import React, { memo } from 'react'
import { MainWrapper } from './style'
import Hot from '../hot/index'
export default memo(function Main() {
  return (
    <MainWrapper>
      <div className='container wrap-v2'>
        <div className='left-container'>
          <Hot></Hot>
        </div>
        <div className='right-container'>

        </div>
      </div>

    </MainWrapper>
  )
})
