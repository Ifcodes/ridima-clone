import React from "react";
import styled from "styled-components";

const Container = styled.div<{
  width?: string;
  height?: string;
  mobileWidth?: string;
  mobileHeight?: string;
  mainPadding?: string;
}>`
  width: ${(props) => props.width || "23rem"};
  height: ${(props) => props.height || "3.4rem"};
  padding: ${(props) => props.mainPadding || ""};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  border-radius: 3.1rem;
  background-color: #685be1;
  cursor: pointer;
  z-index: 200;

  @media screen and (max-width: 640px) {
    width: ${(props) => props.mobileWidth || "100%"};
    max-width: 23rem;
  }
`;

const PeriodContainer = styled.div<{
  isActive?: boolean;
  selectedOption?: {
    width?: string;
    height?: string;
    activeBgColor?: string;
    activeTextColor?: string;
  };
  padding?: string;
}>`
  width: ${({ selectedOption }) => selectedOption?.width || ""};
  height: ${({ selectedOption }) => selectedOption?.height || ""};
  background-color: ${({ isActive, selectedOption }) =>
    isActive ? selectedOption?.activeBgColor : ""};
  padding: ${({ padding }) => padding || ""};
  color: ${({ isActive, selectedOption }) =>
    isActive ? selectedOption?.activeTextColor : "rgba(255, 255, 254, .3)"};
  border-radius: 3.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PeriodSelector = ({
  width,
  height,
  mobileWidth,
  mobileHeight,
  periods,
  selectedPeriod,
  mainPadding,
  selectedOption,
  selectorPadding,
  handleClick = () => {},
}: {
  periods: Array<string>;
  width?: string;
  height?: string;
  mobileWidth?: string;
  mobileHeight?: string;
  mainPadding?: string;
  selectedPeriod?: string;
  selectedOption?: {
    width?: string;
    height?: string;
    activeBgColor?: string;
    activeTextColor?: string;
  };
  selectorPadding?: string;
  handleClick?: Function;
}) => {
  // const periods = ["Daily", "Monthly", "Yearly"];

  return (
    <Container
      height={height}
      width={width}
      mobileHeight={mobileHeight}
      mobileWidth={mobileWidth}
      mainPadding={mainPadding}
    >
      {periods.map((period, index) => (
        <PeriodContainer
          key={period}
          className="period"
          onClick={() => handleClick(period)}
          isActive={selectedPeriod === period}
          selectedOption={selectedOption}
          padding={selectorPadding}
        >
          <span>{period}</span>
        </PeriodContainer>
      ))}
    </Container>
  );
};

export default PeriodSelector;
