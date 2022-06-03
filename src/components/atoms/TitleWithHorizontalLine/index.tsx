import React from "react";
import { TitleWrapper } from "./styledHorizontalLineTitle";

export type TitleProps = {
  text?: string;
  textColor?: string;
  lineColor?: string;
  textSize?: string;
};
const HorizontalLinedTitle = ({
  text,
  textColor,
  lineColor,
  textSize,
}: TitleProps) => {
  return (
    <TitleWrapper
      textColor={textColor}
      lineColor={lineColor}
      textSize={textSize}
    >
      <div className="text-cont">
        <h1>{text}</h1>
      </div>
      <hr />
    </TitleWrapper>
  );
};

export default HorizontalLinedTitle;
