import React, { MouseEventHandler } from "react";
import { cardDataList } from "../../../utils/helpers/cardsData";
import ProfileCardMobile from "../../atoms/vectors/ProfileCardMobile";
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
      <img src="/vectors/PeachRectangleCard.svg" className="cardBg" />
      <div className="mobile-card-bg">
        <ProfileCardMobile />
      </div>
    </ActiveCardWrapper>
  );
};

export default ActiveCard;
