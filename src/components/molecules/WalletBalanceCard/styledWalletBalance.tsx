import styled from "styled-components";

export const WalletCardWrapper = styled.div`
  width: 100%;
  position: relative;

  img{
    width: 100%;
  }

  .card-content{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    padding: 2rem 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title{
      color: white;
      margin-top: 1rem;
    }

    .currency{
      font-size: 1.5rem;
      font-weight: 400;
      color: white;
    }

  }
`