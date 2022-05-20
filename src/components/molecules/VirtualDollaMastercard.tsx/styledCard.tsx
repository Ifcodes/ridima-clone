import styled from "styled-components";

export const VirtualDollarCardWrapper = styled.div`
  width: 100%;
  position: relative;

  .card-content{
    position: absolute;
    top: 0;
    left: 1rem;
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 1rem;
    background-color: transparent;

    .title-cont{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.5rem;

      .title{
        width: 11rem;
        color: #3F1E4B;
      }
    }

    .description{
      color: ${props => props.theme.colors.grey2};
      margin-top: 1.5rem;
    }
  }

  img{
    width: 100%;
  }
`