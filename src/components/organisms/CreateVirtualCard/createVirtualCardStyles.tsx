import styled from "styled-components"

export const MainWrapper = styled.section`
  width: 100%;
  height: 100vh;

  .stage-title-cont{
    display: flex;
    align-items: center;

    .home{
      color: ${props => props.theme.colors.grey4};
      font-weight: 700;
      cursor: pointer;
    }
  }
`

export const CreateVirtualCardWrapper = styled.div`
  width: 30rem;
  max-width: 35rem;

  .form-title-cont{
    margin: 2rem 0;

    h1{
      color: ${props => props.theme.colors.deepPurple};
    }
  }

  .card-design-content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    h1{
      color: ${props => props.theme.colors.deepPurple};
      font-size: 1.75rem;
      font-weight: 700;
      margin: 0;
    }

    .cards-wrapper{
      width: 100%;
      height: 60%;
      display: flex;
      align-items: center;
      overflow-x: auto;
      gap: 2rem;

      .card-cont{
        height: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;


        p{
          margin-top: 1rem;
          color: ${props => props.theme.colors.blue};
          text-align: center;
        }
      }
    }
  }
`
export const StageTitleWrapper = styled.div<{
  isActive?: boolean;
}>`
  cursor: pointer;

  .arrow{
    color: ${props => props.theme.colors.deepPurple};
    margin: 0 0.5rem;
    font-weight: 700;
  }

  .title{
    color: ${props => props.isActive 
      ? props.theme.colors.deepPurple
      : props.theme.colors.grey4
    };
    font-weight: 700;
  }
  
`

export const FundYourCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 22rem 1fr;
  grid-gap: 12rem;

  .form-cont{
    margin: 2rem 0;

    h1{
      color: ${props => props.theme.colors.deepPurple};
    }

    form{
      margin-top: 2rem;

      .exchange-rate-text{
        color: ${props => props.theme.colors.blue};
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

    .modal-title{
      color: ${props => props.theme.colors.deepPurple};
      font-size: 1.75rem;
      font-weight: 700;
      text-align: center;
    }

    p{
      width: 20rem;
    }

    .user{
      text-align: center;
      color: ${props => props.theme.colors.deepPurple};
      font-weight: 700;
      margin: 1.5rem 0 2rem;
    }

    .pin-input-cont{
      justify-content: center;
      border: none;
    } 

    .seperator{
      margin: 0 0.5rem;
    }

    a{
      color: ${props => props.theme.colors.blue};
      text-align: center;
    }

    .success-msg-title{
      color: #27AE60;
      font-weight: 700;
      margin: 0.5rem 0;
      text-align: center;
      font-size: 1.75rem;
    }

    .profile-pics{
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 3rem;
    }

    .illustration{
      width: 12rem;
      height: 12rem;
    }

    .success-title-cont{
      display: flex;
      flex-direction: column;
      align-items: center;
      /* justify-content: center; */

      p{
        text-align: center;
      }
    }
  }
`

export const PinVerificationSuccessWrapper = styled.div`
  
`