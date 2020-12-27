import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  .top{
    display: flex;
    flex-flow: row nowrap;
    margin: 20px 0 20px 20px;
    .dsc-container{
      margin-left: 10px;
      margin-top: 6px;
      .title{
        font-size: 14px;
        font-weight: bold;
        color: black;
      }
      .ctrl{
        margin-top: 10px;
        .icon{
          width: 22px;
          height: 22px;
          display: inline-block;
        }
        .play{
          margin-right: 10px;
          background-position:-267px -205px;
          &:hover{
          background-position:-267px -235px;

          }
        }
        .favorite{
          background-position: -300px -205px;
          &:hover{
          background-position:-300px  -235px;

          }
        }
      }
    }
  }
  .list{
    display: flex;
    flex-flow: column nowrap;
    .list-item {
      position: relative;
      height: 32px;
      display: flex;
      line-height: 32px;
      &:hover{
        .ctrl {
          display: flex;
        }
        .song{
          width: 80px;
        }
      }
      &:nth-child(odd){
        background-color: #e8e8e8;
      }
      .num {
        width:30px;
        margin-right: 10px;
        font-size: 16px;
        text-align: right;
      }
      .song{
        width: 160px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: black;
      }
      .ctrl {
        margin-left: auto;
        margin-right: 10px;
        height: 32px;
        width:76px;
        display: none;
        align-items: center;
        .icon {
          width: 17px;
          height: 17px;
          display: inline-block;
        }
        .play{
          margin-right: 10px;
          background-position:-267px -268px;
          &:hover{
          background-position:-267px -288px;

          }
        }
        .plus{
          margin-right: 10px;
          margin-top: 4px;
          background-position:0 -700px;
          &:hover{
          background-position:-22px -700px;
          }
        }
        .favorite{
          background-position: -297px -268px;
          &:hover{
          background-position:-297px  -288px;

          }
        }
      }
    }
  }
  .more {
    height: 34px;
    background-color: #e8e8e8;
    text-align: right;
    line-height: 34px;
    padding-right: 20px;
    color: black;
  }
`