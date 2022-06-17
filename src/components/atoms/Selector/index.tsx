import React, { MouseEventHandler, ReactNode } from "react";
import ListItemCard from "../ListItemCard";
import ListItemWithRadio from "../ListItemWithRadio";
import { ScrollableModalContent } from "../ScrollableModalContent";
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
  selectedDropdownItem,
  width,
  onClick = () => {},
  handleSelectItem = () => {},
}: {
  selectorTitle?: string | ReactNode | null;
  titleIsActive?: boolean;
  mt?: string;
  selectedDropdownItem?: string;
  className?: string;
  showDropdown?: boolean;
  dropDownList?: Array<any>;
  onClick?: MouseEventHandler<HTMLDivElement>;
  handleSelectItem?: Function;
  width?: string;
}) => {
  return (
    <SelectButtonWrapper
      onClick={onClick}
      isActive={titleIsActive}
      mt={mt}
      className={className}
      showDropdown={showDropdown}
      width={width}
    >
      <span className="title">{selectorTitle}</span>
      <div>{showDropdown ? <CaretUpIcon /> : <CaretDown />}</div>
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
