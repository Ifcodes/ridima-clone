import React, { ReactNode } from "react";
import { CardProps } from "../../../types";
import { ListItemWrapper } from "./listItemStyles";

interface ListItemProps extends CardProps {
  showMainBorder?: boolean;
  showTextBorder?: boolean;
  lastIcon?: ReactNode;
  alignItems?: string;
  titleFs?: string;
  titleColor?: string;
  padding?: string;
}
const ListItemCard = ({
  icon,
  title,
  value,
  lastIcon,
  titleDescription,
  showMainBorder,
  alignItems,
  titleFs,
  titleColor,
  padding,
  showTextBorder,
  onCardClick,
}: ListItemProps) => {
  return (
    <ListItemWrapper
      showMainBorder={showMainBorder}
      showTextBorder={showTextBorder}
      alignItems={alignItems}
      titleFs={titleFs}
      titleColor={titleColor}
      onClick={onCardClick}
      padding={padding}
    >
      {icon && (
        <div className="icon-cont">
          <>{icon}</>
        </div>
      )}
      <div className="card-text-content">
        <div className="title-text-wrapper">
          <span className="title">{title}</span>
          {titleDescription && (
            <span className="description">{titleDescription}</span>
          )}
        </div>
        <div>
          {value && <span className="value">{value}</span>}
          {lastIcon && <div className="last-icon-cont">{lastIcon}</div>}
        </div>
      </div>
    </ListItemWrapper>
  );
};

export default ListItemCard;
