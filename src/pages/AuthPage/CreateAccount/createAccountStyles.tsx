import { DetailedHTMLProps } from "react";
import styled from "styled-components";

export const CreateAccountFormWrapper = styled.form<DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 2.5rem;
  overflow: auto;

  ::-webkit-scrollbar{
    width: 0;
  }

  .password-hint{
    color: ${props => props.theme.colors.blue};
    font-size: 0.875rem;
    text-align: center;
    font-weight: 500;
  }

  .alternative{
    width: 27rem;
    max-width: 100%;
    display: flex;
    align-items: center;
    margin-top: 2rem;

    .right-vec{
      margin: 0;
      display: flex;
      align-items: center;
      transform: rotate(180deg);
    }

    span{
      width: 50%;
      font-size: 0.87rem;
      font-weight: 500;
      text-align: center;
      color: ${props => props.theme.colors.grey4};
    }
  }

  .alternative-nav-cont{
    margin-top: 1.4rem;
  }
`

export const VerifyOtpWrapper = styled.div`
  width: 32rem;
  height: 80vh;
  max-height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2.5rem 1.5rem;
  background-color: white;
  border-radius: 2.5rem;
  overflow-y: auto;

  ::-webkit-scrollbar{
    width: 0;
  }

  .form-cont{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
      max-width: 18.7rem;
      text-align: center;
    }
  
    .img-cont{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20rem;
      height: 15rem;
  
      img{
        width: 20rem;
        height: 13rem;
      }
    }

    form{
      width: 100%;
    }
  
    input{
      text-align: center;
    }
  }
`