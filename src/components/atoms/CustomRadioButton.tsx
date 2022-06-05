import React from "react";
import styled from "styled-components";

type RadioBtnProps = {
  isChecked?: boolean;
  checkedColor?: string;
  radioWidth?: string;
  radioHeight?: string;
};

const RadioButtonWrapper = styled.div<RadioBtnProps>`
  width: ${(props) => props.radioWidth || "1.5rem"};
  height: ${(props) => props.radioHeight || "1.5rem"};
  border-radius: 100%;
  background-color: ${(props) =>
    props.isChecked ? props.checkedColor : "#FFFFFF"};
  border: 2px solid #e3e0f9;

  :hover {
    background-color: ${(props) => props.checkedColor};
  }
`;

const CustomRadioButton = ({
  isChecked,
  checkedColor,
  radioWidth,
  radioHeight,
}: RadioBtnProps) => {
  return (
    <RadioButtonWrapper
      isChecked={isChecked}
      checkedColor={checkedColor}
      radioWidth={radioWidth}
      radioHeight={radioHeight}
    ></RadioButtonWrapper>
  );
};

export default CustomRadioButton;
