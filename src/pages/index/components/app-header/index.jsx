import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderWarpper, HeaderLeft, HeaderCenter, HeaderRight } from './style'
import { headerLinks } from '@/pages/index/common/local-data'


export default memo(function AppHeader() {
  const NavBarView = () => {
    return headerLinks.map((item, index) => {
      if (/http/.test(item.link)) {
        return (
          <li className='nav-item' key={item.title}>
            <a href={item.link} target='_blank' className='nav-link'>{item.title}</a>
          </li>
        )
      }
      return (
        <li className='nav-item' key={item.title}>
          <NavLink className='nav-link' to={item.link}>{item.title}</NavLink>
        </li>
      )
    })
  }
  return (
    <HeaderWarpper>
      <div className='container wrap-v1'>
        <HeaderLeft >
          <a href="#" className='logo-img sprite_01'>网易云音乐</a>
        </HeaderLeft>
        <HeaderCenter>
          {NavBarView()}
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
