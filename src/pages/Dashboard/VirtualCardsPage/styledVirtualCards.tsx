import styled from "styled-components";

export const VirtualCardsWrapper = styled.section`
  max-width: 100%;
  height: 100vh;

  .stage-header{
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
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    grid-gap: 2rem;
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

export const CardDetailsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* padding-bottom: 40rem; */

  .stage-title-cont{
    display: flex;
  
    .home{
      color: ${props => props.theme.colors.grey4};
      font-weight: 700;
      cursor: pointer;
    }
  }

  .card-display{
    margin-top: 3.75rem;
  }

  .card-actions-cont{
    display: flex;
    align-items: center;
    margin-top: 2rem;
    gap: 2rem;
  }

  .card-transaction-heading{
    margin-top: 3rem;
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;

    hr{
      margin-left: 1rem;
      width: 100%;
      height: 1px;
      border: 0.5px solid #D7D4F7;
    }
  }

  .transactions{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    gap: 1.5rem;
    margin: 3.2rem 0;
  }
`

export const FundCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 22rem 1fr;
  grid-gap: 12rem;

  .form-cont{
    margin: 2rem 0;

    h1{
      color: ${props => props.theme.colors.deepPurple};
      margin: 0;
    }

    form{
      margin-top: 2rem;

      .exchange-rate-text{
        color: ${props => props.theme.colors.blue};
        margin-top: 1rem;
      }

      .arrow-cont{
        display: flex;
        justify-content: center;
        margin-top: 1rem;
      }
    }
  }

  .virtual-card-cont{
    margin-top: 2rem;
  }

  .modal-content{
    width: 100%;
    height: 100%;
    padding: 1rem 0 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`
export const CardDetailsModalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    text-align: center;
    color: ${props => props.theme.colors.deepPurple};
  }

  .card-cont{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #E0E0E0;

    .label-cont{
      display: block;

      .label{
        color: ${props => props.theme.colors.grey3};
        font-size: 0.75rem;
      }

      .content{
        color: ${props => props.theme.colors.grey1};
        font-size: 0.875rem;
        line-height: 17px;
      }
    }

    button{
      width: max-content;
      height: max-content;
      padding: 0.3rem 0.6rem;
      background-color: #EBE9FB;
      border-radius: 3.125rem;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  }
`