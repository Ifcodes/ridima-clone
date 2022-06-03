import React from "react";
import { CardProps } from "../../../types";
import { RectangleWrapper } from "./styledPlainRectangle";

const PlainRectangleCard = ({
  bgColor,
  title,
  imgUrl,
  onCardClick,
  cardTextWidth,
  imgBottomPosition,
  imgLeftPosition,
}: CardProps) => {
  return (
    <RectangleWrapper
      bgColor={bgColor}
      textWidth={cardTextWidth}
      onClick={onCardClick}
      imgBottomPosition={imgBottomPosition}
      imgLeftPosition={imgLeftPosition}
    >
      <div className="title-cont">
        <h1>{title}</h1>
      </div>
      <img src={imgUrl} alt="" className="illustrations" />
    </RectangleWrapper>
  );
};

export default PlainRectangleCard;
