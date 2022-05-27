import styled, { keyframes } from "styled-components";

export const HomeWrapper = styled.section`
  width: 100%;
  height: 100vh;
  overflow: auto;

  .salutation{
    span{
      color: ${props => props.theme.colors.grey4};
    }
    .user{
      color: ${props => props.theme.colors.primary};
    }
  }

  .statCard-wrapper{
    width: 100%;
    display: grid;
    margin-top: 2rem;
    grid-template-columns: 60% 1fr;
    grid-gap: 1rem;
  }

  .quick-action{
    width: 100%;
    display: flex;
    align-items: center;
    margin: 1.5rem 0;

    span{
      width: 12rem;
      color: ${props => props.theme.colors.primary};
      font-size: 1.5rem;
      font-weight: 700;
      margin-right: 0.5rem;
    }

    hr{
      border: 1px solid #D7D4F7;
      width: 100%;
      height: 0;
    }
  }

  .quick-actions-cont{
    width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    align-items: center;
    margin-bottom: 3rem;
  }

  .modal-content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: auto;
    border-radius: 2.5rem;
    padding: 0 1rem;
    text-align: center;

    ::-webkit-scrollbar{
      width: 0;
    }

    div{
      display: flex;
      flex-direction: column;
      align-items: center
    }

    h1{
      color: ${props => props.theme.colors.deepPurple};
      width: 20rem;
      margin-top: 1.5rem;
      text-align: center;
    }
    p{
      text-align: center;
      width: 100%;
      max-width: 22rem;
    }

    img{
      width: 35%;
      /* margin-top: 2.5rem; */
    }

    .creation-fee{
      color: ${props => props.theme.colors.grey2};
      /* margin: 3.5rem 0 1rem; */
    }
  }
`