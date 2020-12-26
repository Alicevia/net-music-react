import styled from "styled-components"

import banner_sprite from '@/assets/image/banner_sprite.png'

export const NewCDWrapper = styled.div`
  padding: 0 20px;
  padding-top: 20px;
  position: relative;
  .album{
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    height: 186px;
    margin: 20px 0 37px;
    .album-content{
      margin: 30px 40px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
    }
  
  }
  .banner-btn {
      position: absolute;
      top: 50%;
      width: 37px;
      height: 63px;
      background-color: white;
      transform: translateX(247%);
      &.left {
        left: -72px;
        background: url(${banner_sprite}) no-repeat 0 -360px;
        :hover{
          background-position: 0 -430px;
        }
      }
      &.right{
      transform: translateX(-247%);
        right: -72px;
        background: url(${banner_sprite}) no-repeat 0 -508px;
        :hover{
          background-position: 0 -578px;
        }
      }
    }
`