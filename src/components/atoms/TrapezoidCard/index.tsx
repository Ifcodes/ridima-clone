import React from "react";
import { CardProps } from "../../../types";
import LeftTrapezoid from "../vectors/LeftTrapezoid";
import RightTrapezoid from "../vectors/RightTrapezoid";
import { TrapCardWrapper } from "./styledTrapCards";

interface TrapCardProps extends CardProps {
  trapeCardType?: string;
}
const TrapCard = ({
  bgColor,
  trapeCardType,
  titleDescription,
  title,
  icon,
  onCardClick,
}: TrapCardProps) => {
  return (
    <TrapCardWrapper cardType={trapeCardType} onClick={onCardClick}>
      <div className="card-content-wrapper">
        <div className="card-content">
          {trapeCardType === "leftTrape" ? (
            <>
              <>{icon}</>
              <div className="leftTrap-title">
                <h1>{title}</h1>
                <span>{titleDescription}</span>
              </div>
            </>
          ) : (
            <>
              <div>
                <h1>{title}</h1>
                <span>{titleDescription}</span>
              </div>
              <>{icon}</>
            </>
          )}
        </div>
      </div>
      <div className="card-bg-cont"></div>
      {trapeCardType === "leftTrape" ? (
        <LeftTrapezoid bgColor={bgColor} />
      ) : (
        <RightTrapezoid bgColor={bgColor} />
      )}
    </TrapCardWrapper>
  );
};

export default TrapCard;
