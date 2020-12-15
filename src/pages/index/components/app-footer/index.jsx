import React, { Fragment, memo } from 'react'
import { AppFooterWrapper, FooterRightItemWrapper } from './style'
import { footerLinks, footerImages } from 'common/local-data'
export default memo(function AppFooter() {
  const footerLinkView = () => {
    return footerLinks.map(item => {
      return (
        <Fragment key={item.title}>
          <a className='link-item' href={item.link}>{item.title}</a>
          <span className='link-long'>|</span>
        </Fragment>
      )
    })
  }
  const footerImageView = () => {
    return footerImages.map((item, index) => {
      let y = Math.floor(index / 2) * -56 + 'px'
      let x = index % 2 ? -68 + 'px' : 0
      return (
        <FooterRightItemWrapper position={x + ' ' + y} key={item.title}>
          <a href={item.link} className='sprite_footer_02 footer-image'></a>
          <span className='footer-image-text'>{item.title}</span>
        </FooterRightItemWrapper>
      )
    })
  }
  return (
    <AppFooterWrapper>
      <div className='content wrap-v2'>
        <div className='footer-left'>
          <div className='footer-link'>
            {footerLinkView()}
          </div>
          <div className='footer-dsc'>
            <p>网易公司版权所有©1997-2020  杭州乐读科技有限公司运营：<a href="#">浙网文[2018]3506-263号</a></p>
            <p>违法和不良信息举报电话：0571-89853516 举报邮箱：<a href="#">ncm5990@163.com</a></p>
            <p>粤B2-20090191-18  <a href="#">工业和信息化部备案管理系统网站</a>  <a href="#">浙公网安备</a> 33010902002564号</p>
          </div>
        </div>
        <div className='footer-right'>
          <ul className='footer-right-container'>
            {footerImageView()}
          </ul>
        </div>
      </div>
    </AppFooterWrapper>
  )
})
