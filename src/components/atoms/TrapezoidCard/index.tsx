import React from "react";
import { CardProps } from "../../../types";
import LeftTrapezoid from "../vectors/LeftTrapezoid";
import RightTrapezoid from "../vectors/RightTrapezoid";
import { TrapCardWrapper } from "./styledTrapCards";

interface TrapCardProps extends CardProps {
  trapeCardType?: string;
  mobileCardUrl?: string;
}
const TrapCard = ({
  bgColor,
  trapeCardType,
  titleDescription,
  title,
  icon,
  mobileCardUrl,
  onCardClick,
}: TrapCardProps) => {
  return (
    <TrapCardWrapper cardType={trapeCardType} onClick={onCardClick}>
      <div className="card-content">
        {trapeCardType === "leftTrape" ? (
          <div className="text-cont">
            <div className="icon-wrapper">
              <>{icon}</>
            </div>
            <div className="leftTrap-title">
              <h1>{title}</h1>
              <span>{titleDescription}</span>
            </div>
          </div>
        ) : (
          <div className="text-cont">
            <div className="title-cont">
              <h1>{title}</h1>
              <span>{titleDescription}</span>
            </div>
            <div className="icon-wrapper">
              <>{icon}</>
            </div>
          </div>
        )}
      </div>
      {trapeCardType === "leftTrape" ? (
        <div className="trap-wrapper">
          <LeftTrapezoid bgColor={bgColor} />
        </div>
      ) : (
        <div className="trap-wrapper">
          <RightTrapezoid bgColor={bgColor} />
        </div>
      )}
    </TrapCardWrapper>
  );
};

export default TrapCard;
