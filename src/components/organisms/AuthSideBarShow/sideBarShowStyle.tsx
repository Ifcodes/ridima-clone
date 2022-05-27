import styled from "styled-components";
import pattern from '../../../../public/vectors/CreateAccountPattern.svg';

export const SideBarShowWrapper = styled.aside<{bgColor?: string}>`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background: url(${pattern}), ${props => props.bgColor === "yellow" ? "#f5cf48" : "linear-gradient(0deg, rgba(113, 101, 227, 0.05), rgba(113, 101, 227, 0.05)),#FFFFFE"} ;
  background-size: cover;
  background-repeat: no-repeat;
  border-top-left-radius: 2.5rem;
  border-bottom-left-radius: 2.5rem;
  position: relative;
  padding-bottom: 1rem;

  .slick-dots{
    bottom: 1rem;

    li{
      button:before{
        color: #7165E3;
        width: 25px;
        height: 25px;
      }
    }
  }

  .slick-slider{
    height: 100%;
  }
`