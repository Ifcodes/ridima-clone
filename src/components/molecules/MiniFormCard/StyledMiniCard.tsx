import styled from "styled-components";

export const MiniFormCardWrapper = styled.div`
  width: 35rem;
  max-height: 80vh;
  background-color: white;
  border-radius: 2.5rem;
  padding: 2rem 4rem;
  overflow-y: auto;

  ::-webkit-scrollbar{
    width: 0;
  }
  
  .title-cont{
    text-align: center;
  }

  form{
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .secondary-cta{
      width: 100%;
      text-align: center;
      color: ${props => props.theme.colors.primary};
      margin: 4rem 0 2rem;
    }
  }
`