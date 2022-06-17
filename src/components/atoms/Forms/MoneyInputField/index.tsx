import React from "react";
import styled from "styled-components";
import { InputProps } from "../Input";
import { InputStyleProps } from "../Input/inputStyles";
import { MoneyInputWrapper } from "./moneyFieldStyles";

interface MoneyInputProps extends InputProps {
  textColor?: string;
  useInputTag?: boolean;
  valueIsPlaceholder?: boolean;
}

const MoneyInputField = ({
  symbol,
  value,
  textColor,
  bgColor,
  placeholder,
  valueIsPlaceholder,
  readOnly,
  width,
  onChange,
  useInputTag,
  ...props
}: MoneyInputProps) => {
  return (
    <MoneyInputWrapper
      width={width}
      textColor={textColor}
      bgColor={bgColor}
      valueIsPlaceholder={valueIsPlaceholder}
    >
      {useInputTag ? (
        <>
          {symbol && <span>{symbol}</span>}

          <input
            value={value}
            placeholder={placeholder}
            readOnly={readOnly}
            onChange={onChange}
            {...props}
          />
        </>
      ) : (
        <div className="value-cont">
          <span>{symbol}</span> <span className="value">{value}</span>
        </div>
      )}
    </MoneyInputWrapper>
  );
};

export default MoneyInputField;
