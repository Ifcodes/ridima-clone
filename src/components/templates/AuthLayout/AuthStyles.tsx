import styled from "styled-components";
import Bluebg from '../../../../public/vectors/BlueAuthbg.svg';
import Lightbg from '../../../../public/vectors/LightAuthbg.svg';

export const AuthWrapper = styled.section<{lightBg?: Boolean}>`
  width: 100%;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${props => props.lightBg ? `url(${Lightbg})` : `url(${Bluebg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: cover;
  overflow: hidden;
  
  &::before{
    content: '';
    width: 15rem;
    height: 19rem;
    background: ${props => props.lightBg
      ? `url('/vectors/spiralLeftBlue.svg')`
      : `url('/vectors/SpiralLeftWhite.svg')`
    };
    background-repeat: no-repeat;
    position: absolute;
    left: -9rem;
    top: 4rem;
  }

  &::after{
    content: '';
    width: 17rem;
    height: 20rem;
    background: ${props => props.lightBg
      ? `url('/vectors/SpiralRightBlue.svg')`
      : `url('/vectors/SpiralRightYellow.svg')`
    };
    background-repeat: no-repeat;
    position: absolute;
    right: -9rem;
    bottom: 3.13rem;
  }
`
export const BirdShapeWrap = styled.div<{isVisible: Boolean}>`
  position: absolute;
  bottom: 3rem;
  left: 20rem;
  display: ${props => props.isVisible ? 'block' : 'none'};
`
export const LayoutFooter = styled.footer`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
`

export const AuthCard = styled.section`
  width: 55%;
  height: 80vh;
  background-color: white;
  box-shadow: 0 5px 28px rgba(0, 0, 0, 0.1);
  border-radius: 2.5rem;
  display: grid;
  grid-template-columns: 38% 1fr;
  justify-content: center;
  position: relative;

  .bird-cont{
    position: absolute;
    bottom: -3rem;
    left: -3rem;

    @media screen and (max-width: 1220px){
      bottom: -4rem ;
      left: -4rem;
    }
  }
  
`