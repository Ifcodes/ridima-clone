import styled from "styled-components";

export const RectangleWrapper = styled.div<{
  bgColor?: string;
  textWidth?: string;
  mobileTextWidth?: string;
  imgBottomPosition?: string;
  imgLeftPosition?: string;
  imgBottomPositionMobile?: string;
  imgLeftPositionMobile?: string;
}>`
  width: 35rem;
  height: 12rem;
  border-radius: 2.6rem;
  background-color: ${(props) => props.bgColor};
  position: relative;
  overflow: hidden;
  cursor: pointer;

  .illustrations {
    left: ${(props) => props.imgLeftPosition || "0"};
    bottom: ${(props) => props.imgBottomPosition || "-0.5rem"};
  }

  .title-cont {
    height: 100%;
    position: absolute;
    right: 4rem;
    width: ${(props) => props.textWidth || "10.6rem"};
    display: flex;
    align-items: center;

    h1 {
      font-size: 2.25rem;
      color: ${(props) => props.theme.colors.deepPurple};
      font-weight: 700;
    }
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 8rem;
    margin-top: 1rem;
    border-radius: 1.6rem;

    img {
      width: 50%;
    }

    .title-cont {
      right: 2rem;
      width: ${(props) => props.mobileTextWidth || "5rem"};

      h1 {
        font-size: 1.2rem;
      }
    }

    .illustrations {
      max-width: 60%;
      position: absolute;
      left: ${(props) => props.imgLeftPositionMobile || "0"};
      bottom: ${(props) => props.imgBottomPositionMobile || "-0.5rem"};
    }
  }
`;
