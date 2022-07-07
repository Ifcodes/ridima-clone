import { MouseEventHandler } from "react";
import styled from "styled-components";
import ArrowLeftButton from "./vectors/ArrowLeftButton";

const HeaderWrapper = styled.header<{
  width?: string;
  textColor?: string;
  fw?: string;
  fs?: string;
}>`
  display: none;
  @media screen and (max-width: 640px) {
    width: ${(props) => props.width || "100%"};
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 1rem;
    position: relative;

    .back-btn {
      position: absolute;
      left: 0;
      z-index: 10;
    }

    span {
      font-size: ${(props) => props.fs || "1.5rem"};
      font-weight: ${(props) => props.fw || "700"};
      color: ${(props) => props.textColor || props.theme.colors.deepPurple};
    }
  }
`;

const MobileHeader = ({
  title,
  width,
  textColor,
  fw,
  fs,
  handleArrowBackAction,
}: {
  width?: string;
  title?: string;
  textColor?: string;
  fw?: string;
  fs?: string;
  handleArrowBackAction?: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <HeaderWrapper width={width} textColor={textColor} fw={fw} fs={fs}>
      <div className="back-btn" onClick={handleArrowBackAction}>
        <ArrowLeftButton />
      </div>
      <span>{title}</span>
    </HeaderWrapper>
  );
};

export default MobileHeader;
