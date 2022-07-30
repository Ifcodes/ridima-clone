import React from "react";
import { OtherLeaderCardWrapper } from "./cardStyles";
import { LeaderBoardCardProps } from "./TopThreeCard";

const OtherLeaderCard = ({
  arrowIndicator,
  imgUrl,
  avatar,
  amount,
  date,
  username,
  position,
}: LeaderBoardCardProps) => {
  return (
    <OtherLeaderCardWrapper>
      <div className="number-indicator-wrapper">
        <>{arrowIndicator}</>
        <span className="position">{position}</span>
      </div>
      <div className="content-wrapper">
        <div className="img-user-cont">
          {!imgUrl ? <img src={avatar} alt="" /> : <img src={imgUrl} alt="" />}
          <span className="username">@{username?.substring(0, 4)}***</span>
        </div>
        <div className="date-cont">
          <span className="date">{date}</span>
        </div>
        <div className="amount-cont">
          <span className="leader-amount">₦{amount?.toLocaleString()}</span>
          <span className="date-mobile">{date}</span>
        </div>
      </div>
    </OtherLeaderCardWrapper>
  );
};

export default OtherLeaderCard;
