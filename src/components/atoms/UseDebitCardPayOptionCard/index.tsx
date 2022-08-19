import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import FlutterWaveLogoIcon from "../vectors/FlutterWaveLogoIcon";

const Container = styled.div`
  width: 100%;
  height: 7rem;
  padding: 1.5rem 2rem;
  background-color: ${(props) => props.theme.colors.blue};
  display: flex;
  align-items: center;
  border-radius: 0.625rem;
  cursor: pointer;

  .icon-wrap {
    width: 5rem;
    height: 5rem;
    border-radius: 100%;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .text-content {
    display: block;
    margin-left: 1.5rem;

    h3 {
      font-size: 1.125rem;
      font-weight: 500;
      color: white;
      margin-top: 0;
      margin-bottom: 0.5rem;
    }

    span {
      font-size: 0.8rem;
      color: white;
    }
  }

  @media screen and (max-width: 640px) {
    .text-content {
      span {
        font-size: 2vw;
      }
    }
  }
`;
const UseDebitCardPayOptionCard = ({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <Container onClick={onClick}>
      <div className="icon-wrap">
        <FlutterWaveLogoIcon />
      </div>
      <div className="text-content">
        <h3>Use Debit Card</h3>
        <span>This option is secured and provided by flutterwave.</span>
      </div>
    </Container>
  );
};

export default UseDebitCardPayOptionCard;
