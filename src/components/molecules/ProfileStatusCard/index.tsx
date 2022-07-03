import React from "react";
import { CardProps } from "../../../types";
import Button from "../../atoms/Buttons";
import { H1, Paragraph } from "../../atoms/Typography";
import ProfileCardMobile from "../../atoms/vectors/ProfileCardMobile";
import { VirtualDollarCardWrapper } from "../VirtualDollaMastercard.tsx/styledCard";

const ProfileStatusCard = ({ onClick, onCardClick }: CardProps) => {
  return (
    <VirtualDollarCardWrapper onClick={onCardClick}>
      <div className="card-content">
        <div className="title-cont">
          <div>
            <H1 color="#3F1E4B">70%</H1>
            <Paragraph color="#3F1E4B">Profile Complete</Paragraph>
          </div>
          <div className="img-cont">
            <img src="/vectors/IncompleteProfileAvatar.svg" alt="" />
          </div>
        </div>
        <div className="btn-complete">
          <Button
            width="18rem"
            buttonBgType="small"
            bgColor="#3F1E4B"
            textColor="white"
            btnText="Complete profile"
            buttonPosition="left"
            onClick={onClick}
          />
        </div>
      </div>

      <img src="/vectors/YellowCardRectangle.svg" alt="" className="cardBg" />
      <div className="mobile-card-bg">
        <ProfileCardMobile />
      </div>
    </VirtualDollarCardWrapper>
  );
};

export default ProfileStatusCard;
