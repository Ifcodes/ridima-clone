import React, { MouseEventHandler } from "react";
import CopyIcon from "../vectors/CopyIcon";
import { BankTfPayMethodWrapper } from "./bankTfPayMethodStyles";

const BankTransferPayMethodCard = ({
  bankName,
  accountName,
  accountNumber,
  onClick,
}: {
  bankName?: string;
  accountName?: string;
  accountNumber?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <BankTfPayMethodWrapper onClick={onClick}>
      <div className="card-heading">
        <span className="head-title">Bank Transfer</span>
        <div className="copyicon-cont">
          <CopyIcon />
        </div>
      </div>
      <div className="detail">
        <span className="title">Bank Name</span>
        <span className="value">{bankName}</span>
      </div>
      <div className="detail">
        <span className="title">Account Name</span>
        <span className="value">{accountName}</span>
      </div>
      <div className="detail">
        <span className="title">Account Number</span>
        <span className="value">{accountNumber}</span>
      </div>
    </BankTfPayMethodWrapper>
  );
};

export default BankTransferPayMethodCard;
