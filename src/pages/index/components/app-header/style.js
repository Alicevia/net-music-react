import styled from 'styled-components'
import sprite_01 from '@/assets/image/sprite_01.png'

export const HeaderWarpper = styled.nav`
  height:75px;
  background-color:#242424;
  border-bottom:5px solid #C20C0C;
  box-sizing: border-box;
  color: #ccc;
  font-size:14px;
  .container {
    background-color:#000;
    display: flex;
    height:100%;
  }
 
`

export const HeaderLeft = styled.h1`
  background-color:#242424;

  width:177px;
  height:69px;
  .logo-img {
    display: block;
    text-indent: -9999px;
    width: 100%;
    height: 100%;
    background-position: 0 0;
  }
`

export const HeaderCenter = styled.ul`
  background-color:#242424;

  width: 508px;
  height: 69px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  line-height:69px;
  .nav-item{
    height: 100%;
    &:last-child{
      position: relative;
       &::after{
        position: absolute;
        content: '';
        width: 28px;
        height: 14px;
        top: 12px;
        right: -16px;
        background: url(${sprite_01}) no-repeat -190px 0;
      }
    }
    .nav-link{
      color: #ccc;
      height: 100%;
      display: inline-block;
      text-decoration: none;
      padding: 0 19px;
      position: relative;
   
      &.active {
        color: white;
        background-color: black;
        &::before{
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) translateY(1px);
          content:'';
          width: 12px;
          height: 6px;
          background: url(${sprite_01}) no-repeat -226px 0;

        }
      }
      &:hover{
        color: white;
        background-color: black;
      }
    }

  }


`

export const HeaderRight = styled.div`
  background-color:#242424;
  flex: 1;
  display: flex;
  width: auto;
  align-items: center;
  justify-content: flex-end;
  height: 69px;
  .nav-search{
    width: 158px;
    height: 32px;
    border-radius: 16px;
    background-color: white;
    background-position: 1px -99px;
    text-indent: 29px;

  }
  .nav-creator{
    width: 90px;
    height: 32px;
    margin: 0 10px;
    line-height: 29px;
    border-radius: 16px;
    border: 1px solid #4F4F4F;
    background-color: transparent;
    color: #ccc;
    &:hover{
      color: white;
      border-color: white;
    }

  }
  .nav-login{
      color: #666;
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    color: #787878;

    }
  }
`

