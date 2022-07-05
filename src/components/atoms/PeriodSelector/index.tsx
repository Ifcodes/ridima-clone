import React from "react";
import styled from "styled-components";

const Container = styled.div<{ width?: string; isActive?: boolean }>`
  width: ${(props) => props.width || "23rem"};
  height: 3.4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 3.1rem;
  background-color: #685be1;
  cursor: pointer;
  z-index: 200;

  @media screen and (max-width: 640px) {
    width: 10rem;
    height: 2rem;
  }
`;

const PeriodContainer = styled.div<{ isActive?: boolean }>`
  background-color: ${(props) => props.isActive && "white"};
  color: ${(props) =>
    props.isActive ? props.theme.colors.blue : "rgba(255, 255, 254, .3)"};
  border-radius: 3.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 640px) {
  }
`;

const PeriodSelector = ({
  width,
  selectedPeriod,
  handleClick = () => {},
}: {
  width?: string;
  selectedPeriod?: string;
  handleClick?: Function;
}) => {
  const periods = ["Daily", "Monthly", "Yearly"];

  return (
    <Container width={width}>
      {periods.map((period, index) => (
        <PeriodContainer
          key={period}
          className="period"
          onClick={() => handleClick(period)}
          isActive={selectedPeriod === period}
        >
          <span>{period}</span>
        </PeriodContainer>
      ))}
    </Container>
  );
};

export default PeriodSelector;
