import React, { MouseEventHandler } from "react";
import CaretDown from "../vectors/CaretDown";
import { SelectButtonWrapper } from "./styledSelector";

const Selector = ({
  selectorTitle,
  onClick = () => {},
}: {
  selectorTitle?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <SelectButtonWrapper onClick={onClick}>
      <span className="title">{selectorTitle}</span>
      <div>
        <CaretDown />
      </div>
    </SelectButtonWrapper>
  );
};

export default Selector;
