import React, { MouseEventHandler } from "react";
import { cardDataList } from "../../../utils/helpers/cardsData";
import ProfileCardMobile from "../../atoms/vectors/ProfileCardMobile";
import YellowCardRectangle from "../../atoms/vectors/YellowCardRectangle";
import { ActiveCardWrapper } from "./styledCard";

const ActiveCard = ({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <ActiveCardWrapper onClick={onClick}>
      <div className="content">
        <div className="title-cont">
          <h1 className="title">Virtual Dollar Card</h1>
          <div className="total-cards">
            <span>+{cardDataList.length}</span>
          </div>
        </div>
        <img
          src="/vectors/GroupedCardSamplesIllus.svg"
          alt=""
          className="card-illustrations"
        />
      </div>
      <div className="cardBg">
        <YellowCardRectangle bgcolor="#FCF2CF" />
      </div>
      <div className="mobile-card-bg">
        <ProfileCardMobile bgcolor={"#FCF2CF"} />
      </div>
    </ActiveCardWrapper>
  );
};

export default ActiveCard;
