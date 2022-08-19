import styled from "styled-components";

export const AddBankAccountWrapper = styled.div`
  width: 100%;
  height: 32rem;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .text-form-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title-cont {
      text-align: center;

      h1 {
        color: ${(props) => props.theme.colors.deepPurple};
      }
    }

    .form-cont {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1rem;

      p {
        color: ${(props) => props.theme.colors.blue};
        align-self: flex-start;
        text-align: left;
      }
    }
  }
`;
