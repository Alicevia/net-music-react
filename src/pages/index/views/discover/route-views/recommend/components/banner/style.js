import styled from "styled-components";
import download from '@/assets/image/download.png'
import banner_sprite from '@/assets/image/banner_sprite.png'
export const BannerWrapper = styled.section.attrs()`
  width: 100%;
  height: 285px;
  background: url(${props => { return props.blurBG }})  center center/6000px;
  transition: background .5s;
  .container {
    position: relative;
    height: 100%;
    position: relative;
    display: flex;
    .banner-carousel {
      width: 730px;
      .carousel-item{
        .carousel-img {
          width:100%;
          height: 285px;
        }
      }

    }
    .banner-download{
      width: 254px;
      display: flex;
      flex-direction: column ;
      background:url(${download}) no-repeat 0 0;
      align-items: center;
      justify-content: flex-end;
      .download-link {
        width: 215px;
        height: 56px;
        &:hover{
          background:url(${download}) no-repeat 1px -289px;

        }
      }
      .download-text{
        padding: 13px 0;
        color: #8d8d8d;
      }
    }
    .banner-btn {
      position: absolute;
      top: 50%;
      width: 37px;
      height: 63px;
      background-color: white;
      transform: translateY(-50%);
      &.left {
        left: -72px;
        background: url(${banner_sprite}) no-repeat 0 -360px;
        :hover{
          background-position: 0 -430px;
        }
      }
      &.right{
        right: -72px;
        background: url(${banner_sprite}) no-repeat 0 -508px;
        :hover{
          background-position: 0 -578px;
        }
      }
    }
  }
`