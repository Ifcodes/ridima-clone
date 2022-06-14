import React from "react";
import { CardProps } from "../../../types";
import { ListItemWrapper } from "./listItemStyles";

interface ListItemProps extends CardProps {
  showMainBorder?: boolean;
  showTextBorder?: boolean;
}
const ListItemCard = ({
  icon,
  title,
  value,
  titleDescription,
  showMainBorder,
  showTextBorder,
  onCardClick,
}: ListItemProps) => {
  return (
    <ListItemWrapper
      showMainBorder={showMainBorder}
      showTextBorder={showTextBorder}
      onClick={onCardClick}
    >
      {icon && (
        <div className="icon-cont">
          <>{icon}</>
        </div>
      )}
      <div className="card-text-content">
        <div className="title-cont">
          <span className="title">{title}</span>
          <span className="description">{titleDescription}</span>
        </div>
        <div>
          <span className="value">{value}</span>
        </div>
      </div>
    </ListItemWrapper>
  );
};

export default ListItemCard;
