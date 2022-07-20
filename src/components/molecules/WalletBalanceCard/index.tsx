import React from "react";
import { CardProps } from "../../../types";
import Button from "../../atoms/Buttons";
import { H1 } from "../../atoms/Typography";
import BlueCardRectangle from "../../atoms/vectors/BlueCardRectangle";
import cardRactangle from "/vectors/BlueCardRectangle.svg";
import { WalletCardWrapper } from "./styledWalletBalance";

const WalletBalanceCard = ({
  title,
  value,
  btnText,
  btnColor,
  currency,
  onClick,
}: CardProps) => {
  return (
    <WalletCardWrapper>
      <div className="card-content">
        <div className="text-cont">
          <span className="title">{title}</span>
          <H1 color="white" fontSize="3rem">
            {value}
            <sup className="currency">{currency}</sup>
          </H1>
        </div>
        <div className="wallet-card-btn-cont">
          <Button
            width="100%"
            height="100%"
            buttonBgType="medium"
            bgColor={btnColor || "#F5CF48"}
            btnText={btnText}
            buttonPosition="left"
            onClick={onClick}
          />
        </div>
        <div className="btn-cont-mobile">
          <Button
            width="100%"
            buttonBgType="mobile"
            bgColor={btnColor || "#F5CF48"}
            btnText={btnText}
            buttonPosition="left"
            onClick={onClick}
          />
        </div>
      </div>
      <img src={`${cardRactangle}`} alt="" className="cardbg" />
      <img
        src={`/vectors/BlueCardRecMobile.svg`}
        alt=""
        className="cardbg-mobile"
      />
    </WalletCardWrapper>
  );
};

export default WalletBalanceCard;
