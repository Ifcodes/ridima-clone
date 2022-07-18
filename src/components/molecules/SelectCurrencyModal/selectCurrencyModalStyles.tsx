import styled from "styled-components";

export const SelectedCurrencyModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  h1 {
    color: ${(props) => props.theme.colors.deepPurple};
  }

  .currency-list-cont {
    width: 100%;
    margin-top: 0.5rem;

    .currency-cont {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f2f2f2;
      padding: 1.5rem;
      margin-top: 1rem;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 640px) {
    padding: 1.5rem;
  }
`;
