import styled from "styled-components";
import pattern from '../../../../public/vectors/CreateAccountPattern.svg';

export type bgType = "light" | "yellow"

export const SlideCardWrapper = styled.div<{bgColor?: bgType | string}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .illustration{
    width: 100%;
    margin: 4rem 0 1.5rem;
    display: flex;
    justify-content: center;
    
    img{
      max-width: 14rem;
      max-height: 17rem;
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
    }

    p{
      width: 100%;
      margin-bottom: 4.5rem;
    }
  }
  
  @media screen and (max-width: 1024px) {

    .illustration{
      width: 80%;
      margin: 2rem 0 0.5rem;
      
      img{
        max-width: 10rem;
        max-height: 13rem;
      }
    }

    .description-cont{
      h1{
        font-size: 1rem;        
      }

      p{
        font-size: 0.8rem;
        margin-bottom: 3.2rem;
      }
    }
  }
`