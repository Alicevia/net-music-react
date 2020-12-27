import styled from "styled-components";


export const Wrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  z-index: 1;
  &::after{
    content: '';
    position: absolute;
    width: 102%;
    height:5px;
    bottom:0;
    left: 50%;
    transform: translate(-50%,50%);
    z-index: -1;
    filter: blur(2px);
    background-color: #8c8c8c;
  }
  .image{
    width: 100%;
    height: 100%;
  }
  .image-cover{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: ${props => props.coverPosition};
  }

`