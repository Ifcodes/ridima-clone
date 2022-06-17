import styled from "styled-components";

export const WalletActionCardWrap = styled.div<{ isYellowBg?: boolean }>`
  width: 10.93rem;
  height: 13.1rem;
  border-radius: 1.5rem;
  cursor: pointer;
  position: relative;

  .card-content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 1.5rem;

    span {
      width: 6rem;
      color: ${(props) =>
        props.isYellowBg ? props.theme.colors.deepPurple : "white"};
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`;
