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
      <div className="content-wrapper">
        <div className="img-user-cont">
          {!imgUrl ? <img src={avatar} alt="" /> : <img src={imgUrl} alt="" />}
          <div className="text-content">
            <span className="username">@{username?.substring(0, 4)}***</span>
            <span className="date-mobile">{date}</span>
          </div>
        </div>
        <div className="date-cont">
          <span className="date">{date}</span>
        </div>

        <div className="number-indicator-wrapper">
          <>{arrowIndicator}</>
          <span className="position">{position}</span>
        </div>
      </div>
    </OtherLeaderCardWrapper>
  );
};

export default OtherLeaderCard;
