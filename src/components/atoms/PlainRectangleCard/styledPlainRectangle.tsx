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
    width: 50%;
    position: absolute;
    left: ${(props) => props.imgLeftPosition || "0"};
    bottom: ${(props) => props.imgBottomPosition || "-0.5rem"};
  }

  .card-content {
    width: 100%;
    height: 100%;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;

    .title-cont {
      width: ${(props) => props.textWidth || "12rem"};
      display: flex;
      align-items: center;

      h1 {
        font-size: 2.25rem;
        color: ${(props) => props.theme.colors.deepPurple};
        font-weight: 700;
      }
    }
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: 9rem;
    margin: 1.5rem 0;
    border-radius: 1.6rem;

    img {
      width: 50%;
    }
    .card-content {
      padding: 1rem 2rem 1rem;
      .title-cont {
        width: ${(props) => props.mobileTextWidth || "9rem"};

        h1 {
          font-family: "cera_problack";
          font-size: 1.7rem;
        }
      }
    }

    .illustrations {
      max-width: 60%;
      position: absolute;
      left: ${(props) => props.imgLeftPositionMobile || "0"};
      bottom: ${(props) => props.imgBottomPositionMobile || "0"};
    }
  }
`;
