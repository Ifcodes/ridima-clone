import React from "react";
import { CardProps } from "../../../types";
import { CardTypeCardWrapper } from "./styledCardTypeCard";

const CardTypeCard = ({
  icon,
  title,
  titleDescription,
  bgColor,
  isActive,
  onCardClick,
}: CardProps) => {
  return (
    <CardTypeCardWrapper
      cardBgColor={bgColor}
      isActive={isActive}
      onClick={onCardClick}
    >
      <div className="icon-cont">
        <>{icon}</>
      </div>
      <span className="card-type-title">{title}</span>
      <div className="card-type-desc">{titleDescription}</div>
    </CardTypeCardWrapper>
  );
};

export default CardTypeCard;
