import React from "react";
import { CardProps } from "../../../types";
import Button from "../../atoms/Buttons";
import MasterCardLogo from "../../atoms/vectors/MasterCardLogo";
import ProfileCardMobile from "../../atoms/vectors/ProfileCardMobile";

const CreateCard = ({ onClick, onCardClick }: CardProps) => {
  return (
    <>
      <div className="card-content" onClick={onCardClick}>
        <div>
          <div className="title-cont">
            <h3 className="v-dollar-title">Virtual US Dollar Mastercard</h3>
            <MasterCardLogo />
          </div>
          <span className="description">$2 Creation Fee</span>
        </div>
        <div className="btn-complete">
          <Button
            width="18rem"
            buttonBgType="medium"
            bgColor="#3F1E4B"
            textColor="white"
            btnText="Create card"
            buttonPosition="left"
            onClick={onClick}
            mt="0"
          />
        </div>
      </div>

      <img src="/vectors/YellowCardRectangle.svg" alt="" className="cardBg" />
      <div className="mobile-card-bg">
        <ProfileCardMobile />
      </div>
    </>
  );
};

export default CreateCard;
