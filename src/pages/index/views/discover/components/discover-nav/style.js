import styled from "styled-components";

export const DiscoverNavWrapper = styled.nav`
  width: 100%;
  height: 30px;
  background-color: #C20C0C;
  box-sizing: border-box;
  border-bottom: 1px solid #a40011;
  .discover-nav {
    font-size: 12px;
    display: flex;
    height: 29px;
    padding-left: 356px;
    align-items: center;
    .discover-nav-item{
      padding: 0 19px;
      .nav-link {
        margin-top: -4px;
        color: white;
        display: inline-block;
        text-decoration: none;
        padding: 4px 12px;
        border-radius: 12px;
        &.active,:hover {
          background-color: #9B0909;
        }
       
      }
    }
  }
`