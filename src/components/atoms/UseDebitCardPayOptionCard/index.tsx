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
      font-size: 0.875rem;
      color: white;
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
        <h3>Use USSD Code</h3>
        <span>
          You’d be asked to dail a code on your device and follow the prompt.
        </span>
      </div>
    </Container>
  );
};

export default UseDebitCardPayOptionCard;
