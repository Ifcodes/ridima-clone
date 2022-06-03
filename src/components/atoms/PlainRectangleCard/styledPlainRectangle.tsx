import styled from "styled-components";

export const RectangleWrapper = styled.div<{
  bgColor?: string;
  textWidth?: string;
  imgBottomPosition?: string;
  imgLeftPosition?: string;
}>`
  width: 37rem;
  height: 12rem;
  border-radius: 2.6rem;
  background-color: ${(props) => props.bgColor};
  position: relative;
  overflow: hidden;
  cursor: pointer;

  .illustrations {
    max-width: 60%;
    position: absolute;
    left: ${(props) => props.imgLeftPosition || "0"};
    bottom: ${(props) => props.imgBottomPosition || "-0.5rem"};
  }

  .title-cont {
    height: 100%;
    position: absolute;
    right: 6rem;
    width: ${(props) => props.textWidth || "10.6rem"};
    display: flex;
    align-items: center;

    h1 {
      font-size: 2.25rem;
      color: ${(props) => props.theme.colors.deepPurple};
      font-weight: 700;
    }
  }
`;
