import React, { MouseEventHandler, ReactNode } from "react";
import CaretDown from "../vectors/CaretDown";
import { SelectButtonWrapper } from "./styledSelector";

const Selector = ({
  selectorTitle,
  titleIsActive,
  mt,
  className,
  onClick = () => {},
}: {
  selectorTitle?: string | ReactNode | null;
  titleIsActive?: boolean;
  mt?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <SelectButtonWrapper
      onClick={onClick}
      isActive={titleIsActive}
      mt={mt}
      className={className}
    >
      <span className="title">{selectorTitle}</span>
      <div>
        <CaretDown />
      </div>
    </SelectButtonWrapper>
  );
};

export default Selector;
