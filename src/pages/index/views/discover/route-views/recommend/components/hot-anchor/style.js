import styled from "styled-components";


export const MusicianWrapper = styled.div`
  padding: 19px;
  .header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    .title{
      font-weight: bold;
    }
  }
  .musician-container {
    .item {
      display: flex;
      height: 62px;
      margin-bottom: 20px;
      .image{
        width: 62px;
        height: 62px;
      }
      .dsc{
        flex: 1;
        padding-left: 15px;
        border: 1px solid #e9e9e9;
        border-left: none;
        background-color: #fafafa;
        :hover{
          background-color: #f4f4f4;
        }
        .singer{
          font-size: 14px;
          font-weight: bold;
          margin:6px 0;

        }
        .singer-desc{
          color: #666;
        }
      }
    }
  }
  .apply{
    display: inline-block;
    text-align: center;
    line-height: 31px;
    color: black;
    width: 100%;
    height: 31px;
    font-weight: bold;
    border: 1px solid #999;
    border-radius: 3px;
    text-decoration: none;
    :hover{
      background-color: #f5f3f3d9;
    }
    :active{
      background-color: white;
    }
  }
`