import styled from "styled-components";


export const AppFooterWrapper = styled.footer`
  width: 100%;
  height: 173px;
  border-top: 1px solid rgb(211, 211, 211);
  .content{
    margin-top: 24px;
    display: flex;
    height: 100%;
    color:rgb(102, 102, 102);
    .footer-left{
      .link-item{
      color:rgb(153, 153, 153);
      }
      .link-long {
        margin: 0 10px;
        &:last-child{
          display: none;
        }
      }
      .footer-dsc{
        margin-top: 5px;
        line-height:24px;
      }
    }
    .footer-right{
      height: 100%;
      margin-left: auto;
      .footer-right-container{
        height: 100%;
        display: flex;
        justify-content: flex-end;


      }
    }
  }
`

export const FooterRightItemWrapper = styled.li`
         margin-left: 30px;
         display: flex;
         flex-direction: column;
         align-items: center;
         .footer-image {
          width: 50px;
          height: 50px;
          background-position:${props => props.position} ;
          background-size:234%;
          margin-bottom: 10px;
         }
         .footer-image-text{
           font-weight: bold;
           color: #bbb;
         }
         
         

`
