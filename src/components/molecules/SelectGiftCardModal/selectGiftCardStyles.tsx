import styled from "styled-components";

export const SelectGiftCardModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 5rem;

  h1 {
    color: ${(props) => props.theme.colors.deepPurple};
    text-align: center;
    margin: 2rem 0;
  }
  .currency-cont {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    padding: 1.2rem;
    cursor: pointer;
  }

  .currency-cont:first-child {
    border-top: 1px solid #f2f2f2;
  }
`;
