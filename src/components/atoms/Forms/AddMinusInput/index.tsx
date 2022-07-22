import React, { ChangeEventHandler, FocusEventHandler } from "react";
import { CircledBackground } from "../../CircledBackground";
import MinusIcon from "../../vectors/MinusIcon";
import PlusIcon from "../../vectors/PlusIcon";
import Input from "../Input";
import { AddMinusWrapper } from "./addminusInputStyles";

type AddMinusProps = {
  inputValue?: string;
  addBy?: number;
  subtractBy?: number;
  placeholder?: string;
  handleButtons?: Function;
  symbol?: string;
  isReadOnly?: boolean;
  setFocus?: Function;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
const AddMinusInput = ({
  inputValue,
  placeholder,
  handleButtons = () => {},
  isReadOnly,
  setFocus = () => {},
  symbol,
  onChange,
}: AddMinusProps) => {
  return (
    <AddMinusWrapper>
      <CircledBackground onClick={() => handleButtons("minus")}>
        <MinusIcon />
      </CircledBackground>
      <div className="add-input-cont">
        <Input
          value={inputValue}
          placeholder={placeholder}
          onChange={onChange}
          symbol={symbol || ""}
          required
          mt="0"
          readOnly={isReadOnly}
          onFocus={() => setFocus(false)}
          onBlur={() => setFocus(true)}
        />
      </div>
      <CircledBackground onClick={() => handleButtons("add")}>
        <PlusIcon />
      </CircledBackground>
    </AddMinusWrapper>
  );
};

export default AddMinusInput;
