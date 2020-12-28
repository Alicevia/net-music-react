import React, { memo } from 'react'
import { LoginRecWrapper } from './style'
export default memo(function LoginRec() {
  return (
    <LoginRecWrapper>
      <p className='desc'>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <a className='link sprite_02' href="">用户登录</a>

    </LoginRecWrapper>
  )
})
