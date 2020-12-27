import styled from "styled-components";


export const ListRakingWrapper = styled.div`
  padding: 0 20px;
  padding-top: 20px;
  position: relative;
  .list-ranking{
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    .item{
      flex: 1;
      border-right: 1px solid #ccc;
    box-shadow: 0px 0px 1px 1px white inset;

      &:last-child{
        border-right:none;
      }
    }
  }
`