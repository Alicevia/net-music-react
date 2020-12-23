import React, { memo, useEffect } from 'react'

import Banner from './components/banner'
import Main from './components/main'
export default memo(function Recommend() {


  return (
    <div>
      <Banner></Banner>
      <Main></Main>
    </div>
  )
})
