import React, { MouseEventHandler } from "react";
import { SelectedImgCardWrapper } from "./styledSelectedImgCard";

const SelectImgCard = ({
  imgUrl,
  removeImg,
  width,
  height,
  borderRadius,
}: {
  imgUrl?: string;
  removeImg?: MouseEventHandler<HTMLDivElement>;
  width?: string;
  height?: string;
  borderRadius?: string;
}) => {
  return (
    <SelectedImgCardWrapper
      width={width}
      height={height}
      borderRadius={borderRadius}
    >
      <div className="remove-img" onClick={removeImg}>
        -
      </div>
      <img src={`${imgUrl}`} alt="" />
    </SelectedImgCardWrapper>
  );
};

export default SelectImgCard;
