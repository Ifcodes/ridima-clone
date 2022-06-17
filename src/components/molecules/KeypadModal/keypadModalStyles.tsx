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
  padding: 2rem;

  .input-cont {
    width: 100%;
    margin-top: 2rem;
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
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    margin-top: 3rem;

    .clear-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .digit {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      color: ${(props) => props.theme.colors.deepPurple};
      font-weight: 500;
      cursor: pointer;
    }
  }
`;
