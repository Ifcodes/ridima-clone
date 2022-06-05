import styled from "styled-components";

export const FileUploadWrapper = styled.div`
  width: 10rem;
  height: 10rem;
  border: 1px dashed ${(props) => props.theme.colors.blue};
  background-color: ${(props) => props.theme.colors.accentWhite};
  cursor: pointer;

  label {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    span {
      margin-top: 1rem;
      color: ${(props) => props.theme.colors.blue};
      font-weight: 500;
      font-size: 0.875;
      text-align: center;
    }
  }

  input {
    width: 100%;
    height: 100%;
    display: none;
  }
`;
