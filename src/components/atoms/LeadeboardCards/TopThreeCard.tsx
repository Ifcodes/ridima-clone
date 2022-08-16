import React, { ReactNode } from "react";
import { TopThreeCardWrapper } from "./cardStyles";

export type LeaderBoardCardProps = {
  arrowIndicator?: ReactNode;
  date?: string;
  imgUrl?: string;
  avatar?: string;
  amount?: number;
  position?: number;
  isNumberOne?: boolean;
  username?: string;
};

const TopThreeCard = ({
  arrowIndicator,
  imgUrl,
  avatar,
  amount,
  username,
  position,
  isNumberOne,
}: LeaderBoardCardProps) => {
  return (
    <TopThreeCardWrapper isNumberOne={isNumberOne}>
      <div className="indicator-wrapper">
        <>{arrowIndicator}</>
        {!isNumberOne && <span className="position">{position}</span>}
      </div>
      <div className="leader-img-cont">
        {!imgUrl ? <img src={avatar} alt="" /> : <img src={imgUrl} alt="" />}
      </div>
      <div className="leader-text-cont">
        <span className="username">@{username?.substring(0, 4)}***</span>
        {/* <span className="leader-amount">₦{amount?.toLocaleString()}</span> */}
      </div>
    </TopThreeCardWrapper>
  );
};

export default TopThreeCard;
