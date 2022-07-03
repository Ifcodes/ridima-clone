import styled from "styled-components";

export const PayBillsCardWrapper = styled.div`
  width: 100%;
  height: max-content;
  position: relative;
  margin-top: 2rem;
  cursor: pointer;

  .card-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    padding-right: 1.2rem;
    top: 0;
    left: 0;

    h3 {
      width: 10rem;
      color: ${(props) => props.theme.colors.deepPurple};
      font-weight: 700;
      font-size: 1.8rem;
      margin: 0.5rem 0;
    }
    span {
      color: ${(props) => props.theme.colors.grey3};
    }
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: 640px) {
    .card-content {
      h3 {
        width: 8rem;
        font-size: 1.5rem;
      }
    }
  }
`;
