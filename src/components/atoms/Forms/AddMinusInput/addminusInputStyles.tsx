import styled from "styled-components";

export const AddMinusWrapper = styled.div<{
  width?: string;
}>`
  width: ${(props) => props.width || "27rem"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  .input-cont {
    width: 16rem;

    input {
      text-align: center;
      font-weight: 700;
      font-size: 1.75rem;
    }
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    max-width: 100%;

    .add-input-cont {
      width: 60%;
      margin-top: 0;
      display: flex;
      align-items: center;
      padding: 0;

      > div {
        display: flex;
        justify-content: center;
      }
    }
  }
`;
