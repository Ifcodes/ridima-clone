import React from "react";
import { CardProps } from "../../../types";
import { RectangleWrapper } from "./styledPlainRectangle";

const PlainRectangleCard = ({
  bgColor,
  title,
  imgUrl,
  onCardClick,
  cardTextWidth,
  mobileTextWidth,
  imgBottomPosition,
  imgLeftPosition,
  imgBottomPositionMobile,
  imgLeftPositionMobile,
}: CardProps) => {
  return (
    <RectangleWrapper
      bgColor={bgColor}
      textWidth={cardTextWidth}
      onClick={onCardClick}
      imgBottomPosition={imgBottomPosition}
      imgLeftPosition={imgLeftPosition}
      imgBottomPositionMobile={imgBottomPositionMobile}
      imgLeftPositionMobile={imgLeftPositionMobile}
      mobileTextWidth={mobileTextWidth}
    >
      <div className="title-cont">
        <h1>{title}</h1>
      </div>
      <img src={imgUrl} alt="" className="illustrations" />
    </RectangleWrapper>
  );
};

export default PlainRectangleCard;
