import styled from 'styled-components'

export const HeaderWarpper = styled.nav`
  height:75px;
  background-color:#242424;
  border-bottom:5px solid #C20C0C;
  box-sizing: border-box;
  color: #ccc;
  font-size:14px;
  .container {
    display: flex;
    height:100%;
  }
 
`

export const HeaderLeft = styled.h1`
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
      .nav-hot{
        position: absolute;
        width: 28px;
        height: 14px;
        top: 12px;
        right: -16px;
        background-position: -190px 0;
      }
    }
    .nav-link{
      color: #ccc;
      height: 100%;
      display: inline-block;
      text-decoration: none;
      padding: 0 19px;
   
      &.active {
        color: white;
        background-color: black;
      }
      &:hover{
        color: white;
        background-color: black;
      }
    }

  }


`

export const HeaderRight = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  justify-content: space-between;
  width: 300px;
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

