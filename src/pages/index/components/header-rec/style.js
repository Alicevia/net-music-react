import styled from "styled-components";

import sprite_02 from '@/assets/image/sprite_02.png'
export const HeaderRecWrapper = styled.div`
  width: 100%;
  border-bottom:2px solid #C10D0C;
  display: flex;
  justify-content: space-between;
  align-items:center;
  .header-title{
    display: flex;
    .dot {
      display: inline-block;
      width:34px;
      height: 34px;
      background: url(${sprite_02}) no-repeat -226px -156px;
    }
    .title{
      color: #333;
      text-decoration: none;
      font-size: 20px;
    }

  }
  .header-center{
    flex: 1;
    
  }
  .header-more{
    margin-right: 10px;
    width: 40px;
    margin-bottom: -10px;
    background: url(${sprite_02}) no-repeat 27px -238px;
    :hover{
    text-decoration: underline;

    }
  }
`

export const MusicTypeWrapper = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  margin-left: 10px;
  margin-bottom: -5px;
  .music-type{
    height: 13px;
    border-right: 1px solid #ccc;
    padding: 0 13px;
    line-height: 13px;
    color: #333;
    &:last-child{
      border: none;
    }
  }
`