import styled from "styled-components";
import pattern from '../../../../public/vectors/CreateAccountPattern.svg';

export type bgType = "light" | "yellow"

export const SlideCardWrapper = styled.div<{bgColor?: bgType | string}>`
  max-width: 100%;
  min-height: 100%;
  margin-bottom: 0;
  background: url(${pattern}), ${props => 
    props.bgColor === "light" 
    ? "transparent" 
    : "rgba(245, 207, 72)"
  };
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  .illustration{
    width: 100%;
    margin: 4rem 0 1.5rem;
    display: flex;
    justify-content: center;
    
    img{
      max-width: 14rem;
      max-height: 15rem;

      @media screen and (max-width: 1220px) {
        max-height: 10rem;
      }
    }
  }

  .description-cont{
    width: 17rem;
    max-width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
      text-align: center;
      width: 100%;
      margin-bottom: 0.5rem;

      @media screen and (max-width: 1220px) {
        font-size: 1.3rem;
        margin-bottom: 0;
      }
    }

    p{
      width: 100%;
      margin-bottom: 5rem;

      @media screen and (max-width: 1220px){
        font-size: 0.9rem;
        margin-bottom: 0.75rem;
      }
    }
  }

  @media screen and (max-width: 1220px){
    padding: 0 0.5rem;
  }
   
`