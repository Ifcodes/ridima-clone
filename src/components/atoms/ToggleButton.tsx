import React from "react";
import styled from "styled-components";

const Container = styled.div<{ isActive?: boolean }>`
  width: 3.2rem;
  height: 1.875rem;
  border-radius: 15px;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.blue : "#f2f2f2"};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isActive ? "flex-end" : "flex-start")};
  cursor: pointer;

  .toggle-btn {
    width: 1.625rem;
    height: 1.625rem;
    border-radius: 100%;
    background-color: white;
    box-shadow: -2px 1px 4px rgba(0, 0, 0, 0.05);
  }
`;
const ToggleButton = ({
  isActive,
  onToggle = () => {},
}: {
  isActive?: boolean;
  onToggle?: Function;
}) => {
  return (
    <Container isActive={isActive} onClick={() => onToggle()}>
      <div className="toggle-btn"></div>
    </Container>
  );
};

export default ToggleButton;
