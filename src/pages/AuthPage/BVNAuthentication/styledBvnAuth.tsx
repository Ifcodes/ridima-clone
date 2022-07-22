import styled from "styled-components";

export const BvnAuthModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  .title-cont {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      text-align: center;
      font-weight: 500;
      font-size: 1.75rem;
      width: 20rem;
      margin: 2rem 0 0;
    }

    ol {
      width: 70%;
      min-width: 20rem;

      > li {
        margin: 1.5rem 0;
      }
    }

    li {
      font-size: 1.125rem;
      color: ${(props) => props.theme.colors.grey1};
    }
  }

  @media screen and (max-width: 640px) {
    padding: 0 2rem;

    .title-cont {
      h3 {
        font-size: 1.5rem;
        width: 85%;
      }
    }
  }
`;
