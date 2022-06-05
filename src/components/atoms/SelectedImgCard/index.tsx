import React, { MouseEventHandler } from "react";

const SelectImgCard = ({
  imgUrl,
  removeImg,
}: {
  imgUrl?: string;
  removeImg?: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div>
      <div className="remove-img" onClick={removeImg}>
        -
      </div>
      <img src={`${imgUrl}`} alt="" />
    </div>
  );
};

export default SelectImgCard;
