import styled from "styled-components";

export const MainWrapper = styled.section`
  width: 100%;
  .container {
    background-color: white;
    display: flex;
    border:1px solid #d3d3d3 ;
    border-width:0 1px;
    flex-flow:row nowrap;
    .left-container {
      width: 730px;
      border-right: 1px solid #d3d3d3;
    }
    .right-container{
      flex: 1;
    }
  }
`
