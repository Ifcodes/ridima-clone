import styled from "styled-components";

export const CircledBackground = styled.div<{
  width?: string;
  height?: string;
  mobileWidth?: string;
  mobileHeight?: string;
  bgColor?: string;
  border?: string;
  borderRadius?: string;
  textColor?: string;
  svgWidth?: string;
}>`
  width: ${(props) => props.width || "3.8rem"};
  height: ${(props) => props.height || "3.8rem"};
  background-color: ${(props) => props.bgColor || "#F6F6F6"};
  border: ${(props) => props.border || "none"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.borderRadius || "100%"};
  color: ${(props) => props.textColor || props.theme.colors.red};
  font-weight: 700;
  cursor: pointer;
  font-size: 14px;

  svg {
    width: ${(props) => props.svgWidth || ""};
  }

  @media screen and (max-width: 640px) {
    width: ${(props) => props.mobileWidth || "3.8rem"};
    height: ${(props) => props.mobileHeight || "3.8rem"};
  }
`;
