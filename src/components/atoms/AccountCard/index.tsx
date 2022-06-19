import React from "react";
import { CardProps } from "../../../types";
import { AccountCardWrapper } from "./accountCardStyles";

export interface AccountCardProps extends CardProps {
  accountNumber?: string;
  accountName?: string;
  bankName?: string;
  cardType?: string;
  isActive?: boolean;
}

const AccountCard = ({
  accountName,
  accountNumber,
  bankName,
  cardType,
  isActive,
  onCardClick,
}: AccountCardProps) => {
  return (
    <AccountCardWrapper
      cardType={cardType}
      onClick={onCardClick}
      isActive={isActive}
    >
      <div className="card-content">
        <div className="card-type">{cardType}</div>
        <div className="card-details">
          <span className="acc-number">{accountNumber}</span>
          <span className="acc-number">{accountName}</span>
          <span className="bank-name">{bankName}</span>
        </div>
      </div>
      {cardType === "Primary" ? (
        <img src="/vectors/PrimaryAccountCardBg.svg" alt="" />
      ) : (
        <img src="/vectors/SecondaryAccountCardBg.svg" alt="" />
      )}
    </AccountCardWrapper>
  );
};

export default AccountCard;
