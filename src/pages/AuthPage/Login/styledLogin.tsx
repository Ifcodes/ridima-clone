import { DetailedHTMLProps } from "react";
import styled from "styled-components";

export const LoginWrapper = styled.form<DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem 2.5rem;
  overflow-y: auto;

  .form-cont{
    display: flex;
    flex-direction: column;
    align-items: center;
    
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
  }

  .btn-cont{
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .alternative-nav-cont{
      margin-top: 1rem;
    }
  
    .forgot-password{
      color: ${props => props.theme.colors.primary};
      margin: 0;
    }
  }

`