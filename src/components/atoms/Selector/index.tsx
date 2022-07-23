import React, { MouseEventHandler, ReactNode } from "react";
import ListItemCard from "../ListItemCard";
import ListItemWithRadio from "../ListItemWithRadio";
import CalendarIcon from "../vectors/CalendarIcon";
import CaretDown from "../vectors/CaretDown";
import CaretUpIcon from "../vectors/CaretUpIcon";
import { SelectButtonWrapper } from "./styledSelector";

const Selector = ({
  selectorTitle,
  titleIsActive,
  mt,
  className,
  dropDownList,
  showDropdown,
  showCalendarIcon,
  selectedDropdownItem,
  width,
  mobileWidth,
  onClick = () => {},
  handleSelectItem = () => {},
}: {
  selectorTitle?: string | ReactNode | null;
  titleIsActive?: boolean;
  mt?: string;
  selectedDropdownItem?: string;
  className?: string;
  showDropdown?: boolean;
  showCalendarIcon?: boolean;
  dropDownList?: Array<any>;
  onClick?: MouseEventHandler<HTMLDivElement>;
  handleSelectItem?: Function;
  width?: string;
  mobileWidth?: string;
}) => {
  return (
    <SelectButtonWrapper
      onClick={onClick}
      isActive={titleIsActive}
      mt={mt}
      className={className}
      showDropdown={showDropdown}
      width={width}
      mobileWidth={mobileWidth}
    >
      <span className="title">{selectorTitle}</span>
      <div>
        {showCalendarIcon ? (
          <CalendarIcon />
        ) : showDropdown ? (
          <CaretUpIcon />
        ) : (
          <CaretDown />
        )}
      </div>
      {showDropdown && (
        <div className="dropdown-content">
          {dropDownList &&
            dropDownList.map((item, index) => (
              <ListItemWithRadio
                key={`${item}-${index}`}
                text={item.label}
                onClick={() => handleSelectItem(item)}
                isChecked={item.label === selectedDropdownItem}
              />
            ))}
        </div>
      )}
    </SelectButtonWrapper>
  );
};

export default Selector;
