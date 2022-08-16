import React from "react";
import { CardProps } from "../../../types";
import Button from "../../atoms/Buttons";
import MasterCardLogo from "../../atoms/vectors/MasterCardLogo";
import ProfileCardMobile from "../../atoms/vectors/ProfileCardMobile";
import YellowCardRectangle from "../../atoms/vectors/YellowCardRectangle";

const CreateCard = ({ onClick, onCardClick }: CardProps) => {
  return (
    <>
      <div className="card-content" onClick={onCardClick}>
        <div>
          <div className="title-cont">
            <h3 className="v-dollar-title">Virtual US Dollar Mastercard </h3>
            <div className="v-dollar-title-mobile">
              <h3>Virtual US Dollar </h3>
              <h3 className="mastercard-title">Mastercard</h3>
            </div>

            <div className="master-card-logo">
              <MasterCardLogo />
            </div>
          </div>
          <span className="description">$2 Creation Fee</span>
        </div>
        <div className="btn-complete">
          <Button
            width="18rem"
            buttonBgType="medium"
            bgColor="rgba(63, 30, 75, 0.1)"
            textColor="rgba(63, 30, 75, 1)"
            btnText="Coming Soon!"
            buttonPosition="left"
            onClick={onClick}
            mt="0"
          />
        </div>
        <div className="btn-coming-soon">
          <Button
            width="100%"
            buttonBgType="mobileReverse"
            bgColor="rgba(63, 30, 75, 0.1)"
            btnText="Coming Soon!"
            buttonPosition="left"
            mt="1.5rem"
            onClick={onClick}
          />
        </div>
      </div>

      <div className="cardBg">
        <YellowCardRectangle />
      </div>
      <div className="mobile-card-bg">
        <ProfileCardMobile />
      </div>
    </>
  );
};

export default CreateCard;
