import styled from "styled-components";

export const VirtualCardsWrapper = styled.section`
  width: 100%;
  height: 100vh;
  overflow: auto;

  > div{
    display: flex;
    justify-content: space-between;

    .stage-title-cont{
      display: flex;
      /* align-items: center; */
  
      .home{
        color: ${props => props.theme.colors.grey4};
        font-weight: 700;
        cursor: pointer;
      }
    }
  }

  .cards-wrapper{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin-top: 2rem;

    > div{
      cursor: pointer;
      width: max-content;
      border-radius: 1.5rem;

      :hover{
        box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.3);
        transition: ease 0.3s;
      }   
    }
  }
`