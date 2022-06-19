import React from "react";
import { ButtonProps } from ".";
import PlusIcon from "../vectors/PlusIcon";
import { AddButtonWrapper } from "./buttonStyles";

const AddButton = ({ onClick, width, height, bgColor }: ButtonProps) => {
  return (
    <AddButtonWrapper
      onClick={onClick}
      width={width}
      height={height}
      bgColor={bgColor}
    >
      <PlusIcon />
    </AddButtonWrapper>
  );
};

export default AddButton;
