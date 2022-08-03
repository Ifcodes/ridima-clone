import React, { MouseEventHandler, useState } from "react";
import CopyIcon from "../vectors/CopyIcon";
import CopyIconLg from "../vectors/CopyIconLg";
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
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(`${accountNumber}`)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <BankTfPayMethodWrapper onClick={onClick}>
      <div className="card-heading">
        <span className="head-title">Bank Transfer</span>
        <div className="copyicon-cont" onClick={handleCopyClick}>
          {isCopied ? (
            <img
              src="/vectors/icons8-done.gif"
              alt=""
              style={{ width: "24px", height: "24px" }}
            />
          ) : (
            <CopyIconLg />
          )}
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
