import styled from "styled-components";
import sprite_02 from 'assets/image/sprite_02.png'
import sprite_cover from 'assets/image/sprite_cover.png'
export const AlbumCoverWrapper = styled.div`
  width: 118px;
  background: url(${sprite_02}) no-repeat -260px 100px;

  .image-content{
    position: relative;
    width: 100%;
    height: 100px;
    .image {
      width: 100px;
      height: 100%;
    }
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(${sprite_cover}) no-repeat 0 -570px;
    }
  }
  .dsc-content{
    width: 100%;
    margin-top: 5px;
    font-size: 12px;
    .title{
      font-weight: bold;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;

    }
    .artist{
      width: 100%;
      display: inline-block;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`