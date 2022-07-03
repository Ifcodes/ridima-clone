import styled from "styled-components";
import Bluebg from "../../../../public/vectors/BlueAuthbg.svg";
import Lightbg from "../../../../public/vectors/LightAuthbg.svg";

export const AuthWrapper = styled.section<{ lightBg?: Boolean }>`
  width: 100%;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${(props) =>
    props.lightBg ? `url(${Lightbg})` : `url(${Bluebg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: cover;
  overflow: hidden;

  &::before {
    content: "";
    width: 18%;
    height: 24rem;
    background: ${(props) =>
      props.lightBg
        ? `url('/vectors/spiralLeftBlue.svg')`
        : `url('/vectors/SpiralLeftWhite.svg')`};
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    z-index: 100;
    left: -10rem;
    top: 4rem;

    @media screen and (max-width: 640px) {
      display: none;
    }
  }

  &::after {
    content: "";
    width: 18%;
    height: 24rem;
    background: ${(props) =>
      props.lightBg
        ? `url('/vectors/SpiralRightBlue.svg')`
        : `url('/vectors/SpiralRightYellow.svg')`};
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    right: -9rem;
    bottom: 3.13rem;

    @media screen and (max-width: 640px) {
      display: none;
    }
  }

  @media screen and (max-width: 640px) {
    background: white;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
export const BirdShapeWrap = styled.div<{
  isVisible: Boolean;
  forgotPassword?: Boolean;
}>`
  position: absolute;
  bottom: ${(props) => (props.forgotPassword ? "-3rem" : "3rem")};
  left: 20rem;
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;
export const LayoutFooter = styled.footer`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const LayoutHeader = styled.header<{ width?: string }>`
  display: none;
  @media screen and (max-width: 640px) {
    width: ${(props) => props.width || "100%"};
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 1rem;
    position: relative;

    .back-btn {
      position: absolute;
      left: 0;
      z-index: 10;
      margin-left: 2rem;
    }
  }
`;

export const AuthCard = styled.section`
  width: 55%;
  height: 80vh;
  max-height: 51rem;
  max-width: 58rem;
  background-color: white;
  box-shadow: 0 5px 28px rgba(0, 0, 0, 0.1);
  border-radius: 2.5rem;
  display: grid;
  grid-template-columns: 38% 1fr;
  justify-content: center;
  position: relative;
  font-size: 1rem;

  .bird-cont {
    width: 15%;
    object-fit: contain;
    position: absolute;
    bottom: -4rem;
    left: -3rem;

    @media screen and (max-width: 1220px) {
      bottom: -4.5rem;
      left: -3.5rem;
    }
  }

  @media screen and (max-width: 640px) {
    display: block;
    width: 100%;
    height: 80vh;
    max-width: 100%;
    max-height: 100vh;
    border-radius: 0;
    box-shadow: none;

    .bird-cont {
      display: none;
    }
  }
`;
