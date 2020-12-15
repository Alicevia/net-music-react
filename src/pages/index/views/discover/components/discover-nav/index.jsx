import React from 'react'
import { DiscoverNavWrapper } from './style'
import { dicoverMenu } from 'common/local-data'
import { NavLink } from 'react-router-dom'
export default function DiscoverNav() {
  let discoverNavView = () => {
    return dicoverMenu.map(item => {
      return (
        <li className='discover-nav-item' key={item.title}>
          <NavLink className='nav-link' to={item.link}>{item.title}</NavLink>
        </li>
      )
    })
  }
  return (
    <DiscoverNavWrapper>
      <ul className='discover-nav wrap-v1'>
        {discoverNavView()}
      </ul>
    </DiscoverNavWrapper>
  )
}
