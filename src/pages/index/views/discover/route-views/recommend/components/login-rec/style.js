import styled from "styled-components";


export const LoginRecWrapper = styled.div.attrs({
  className: 'sprite_02'
})`
  padding: 20px;
  height:126px;
  background-position: 0 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  .desc{
    color: #666;
    margin-bottom: 20px;
  }
  .link {
    width: 100px;
    height: 31px;
    display: inline-block;
    background-position: 0 -195px;
    color: white;
    text-align: center;
    line-height: 31px;
    text-decoration: none;
    :hover {
    background-position: -110px -195px;

    }
  }
`