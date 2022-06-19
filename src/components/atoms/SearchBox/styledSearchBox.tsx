import styled from "styled-components";

export const SearchBoxWrapper = styled.div<{
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  bgColor?: string;
  placeholderColor?: string;
  textColor?: string;
  textSize?: string;
}>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || ""};
  display: flex;
  align-items: center;
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "0"};
  background-color: ${(props) => props.bgColor || "transparent"};
  padding: 1rem;

  input {
    display: flex;
    flex-grow: 1;
    margin: 1rem;
    font-size: ${(props) => props.textSize || "1.3rem"};
    padding: 1rem;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${(props) => props.textColor || ""};

    ::placeholder {
      color: ${(props) => props.placeholderColor || ""};
    }
  }
`;
