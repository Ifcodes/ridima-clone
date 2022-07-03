import styled from "styled-components";

export const CircledBackground = styled.div<{
  width?: string;
  height?: string;
  bgColor?: string;
  border?: string;
  borderRadius?: string;
}>`
  width: ${(props) => props.width || "3.8rem"};
  height: ${(props) => props.height || "3.8rem"};
  background-color: ${(props) => props.bgColor || "#F6F6F6"};
  border: ${(props) => props.border || "none"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.borderRadius || "100%"};
  cursor: pointer;
`;
