import React, { ChangeEventHandler } from "react";
import styled from "styled-components";
import CaretDown from "../../vectors/CaretDown";
import CaretUpIcon from "../../vectors/CaretUpIcon";
import { InputProps } from "../Input";
import { SelectWrapper } from "./selectStyles";

interface SelectInputProps extends InputProps {
  options?: Array<{
    label: string;
    value: string | number;
  }>;
  panelOpen?: boolean;
  handleChange?: ChangeEventHandler<HTMLSelectElement>;
}

const SelecInput = ({
  options,
  value,
  handleChange,
  panelOpen,
  onClick,
}: SelectInputProps) => {
  return (
    <SelectWrapper onClick={onClick}>
      <select value={value} onChange={handleChange}>
        {options &&
          options.map((option, index) => (
            <option key={`${index}-${option.label}`} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      {panelOpen ? <CaretUpIcon /> : <CaretDown />}
    </SelectWrapper>
  );
};

export default SelecInput;
