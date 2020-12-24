import styled from "styled-components";

import sprite_cover from '@/assets/image/sprite_cover.png'
import sprite_icon from '@/assets/image/sprite_icon.png'

export const SongWrapper = styled.div`
  width: 140px;
  height: 140px;
  position: relative;
  .song-img {
    width: 100%;
    .image {
      width: 100%;
    }
    .image-cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 140px;
      height: 140px;
      background: url(${sprite_cover}) no-repeat 0 0;
    }
    .image-control {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 26px;
      border-top: 1px solid #666;
      background-color: rgba(0,0,0,.5);
      display: flex;
      align-items: center;
      .icon {
        margin-left: 10px;
        margin-top: -3px;
        width: 14px;
        height: 14px;
        display: inline-block;
        background: url(${sprite_icon}) no-repeat 0 -21px;
      }
      .num {
        color: #ccc;
        margin-left: 5px;
      }
      .play{
        margin-left: auto;
        margin-right: 10px;
        width: 17px;
        height: 17px;
        display: inline-block;
        background: url(${sprite_icon}) no-repeat 0 0px;
        :hover{
          background-position: 0 -60px;
        }
      }
    }
  }
  .song-dsc {
    margin-top:6px;
    .song-link{
      color: black;

    }
  }

`