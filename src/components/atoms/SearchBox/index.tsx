import React, { ChangeEventHandler } from "react";
import SearchIcon from "../vectors/SearchIcon";
import { SearchBoxWrapper } from "./styledSearchBox";

type SearchBoxProps = {
  placeholder?: string;
  value?: any;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  borderRadius?: string;
  bgColor?: string;
  placeholderColor?: string;
  width?: string;
  height?: string;
  border?: string;
  inputTextColor?: string;
  textSize?: string;
  searchIconColor?: string;
};
const SearchBox = ({
  placeholder,
  value,
  onChange,
  borderRadius,
  bgColor,
  placeholderColor,
  width,
  height,
  border,
  inputTextColor,
  searchIconColor,
  textSize,
}: SearchBoxProps) => {
  return (
    <SearchBoxWrapper
      borderRadius={borderRadius}
      bgColor={bgColor}
      placeholderColor={placeholderColor}
      width={width}
      border={border}
      height={height}
      textColor={inputTextColor}
      textSize={textSize}
    >
      <SearchIcon color={searchIconColor} />
      <input placeholder={placeholder} value={value} onChange={onChange} />
    </SearchBoxWrapper>
  );
};

export default SearchBox;
