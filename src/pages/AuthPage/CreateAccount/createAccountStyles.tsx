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
  height: 51rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.5rem 1rem 1rem;
`