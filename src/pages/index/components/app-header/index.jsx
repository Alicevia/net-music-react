import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderWarpper, HeaderLeft, HeaderCenter, HeaderRight } from './style'

export default memo(function AppHeader() {
  return (
    <HeaderWarpper>
      <div className='container wrap-v1'>
        <HeaderLeft >
          <a href="#" className='logo-img sprite_01'>网易云音乐</a>
        </HeaderLeft>
        <HeaderCenter>
          <li className='nav-item'>
            <NavLink exact className='nav-link' to='/discover'>发现音乐</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/mine'>我的音乐</NavLink>

          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/friend'>朋友</NavLink>

          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/shop'>商城</NavLink>

          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/musical'>音乐人</NavLink>

          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/download'>下载客户端</NavLink>
            <span className='nav-hot sprite_01'></span>
          </li>
        </HeaderCenter>
        <HeaderRight>
          <input className='nav-search sprite_01' placeholder="音乐/视频/电台/用户" />
          <button className='nav-creator'>创作者中心</button>
          <div className='nav-login'>登录</div>
        </HeaderRight>
      </div>

    </HeaderWarpper>
  )
})
