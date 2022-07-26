import styled from "styled-components";

export const KeypadModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url("/vectors/ModalPatternBg.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 2rem;

  .input-cont {
    width: 100%;
    /* margin-top: 1rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text {
    color: ${(props) => props.theme.colors.deepPurple};
    font-size: 2rem;
    outline: none;
    border: none;
    font-weight: 700;
  }

  .digits-cont {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin-top: 1rem;
    padding-left: 1rem;

    .clear-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      border-radius: 100%;
      cursor: pointer;
    }
  }
`;

export const DigitWrapper = styled.div<{ isActive?: boolean }>`
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.deepPurple};
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.grey5 : ""};
  font-weight: 500;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.grey5};
  }
`;
