import React from "react";
import { CardProps } from "../../../types";
import { BillCardWrapper } from "./billCardStyles";

interface BillCardProps extends CardProps {
  isHorizontal?: boolean;
}
const BillCard = ({
  icon,
  title,
  bgColor,
  isActive,
  isHorizontal,
}: BillCardProps) => {
  return (
    <BillCardWrapper
      bgColor={bgColor}
      isActive={isActive}
      isHorizontal={isHorizontal}
    >
      <>{icon}</>
      <span>{title}</span>
    </BillCardWrapper>
  );
};

export default BillCard;
