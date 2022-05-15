import styled from "styled-components";

export const MiniFormCardWrapper = styled.div`
  width: 35rem;
  /* min-height: 35.8rem; */
  max-height: 80vh;
  background-color: white;
  border-radius: 2.5rem;
  padding: 2rem 4rem;
  
  .title-cont{
    text-align: center;
  }

  form{
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .secondary-cta{
      text-align: center;
      color: ${props => props.theme.colors.primary};
      margin: 4rem 0 2rem;
    }
  }
`