import React, { MouseEventHandler } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 7rem;
  padding: 1.5rem 2rem;
  background-color: #f5cf4819;
  border: 1px solid rgba(63, 30, 75, 0.1);
  display: block;
  border-radius: 0.625rem;
  cursor: pointer;

  h3 {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.deepPurple};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.deepPurple};
  }
`;
const UseUssdCodePayOptionCard = ({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <Container onClick={onClick}>
      <h3>Use USSD Code</h3>
      <span>
        You’d be asked to dail a code on your device and follow the prompt.
      </span>
    </Container>
  );
};

export default UseUssdCodePayOptionCard;
