import React, { MouseEventHandler, ReactNode } from "react";
import VerticalOptionIcon from "../vectors/VerticalOptionIcon";
import {
  TransactionDetailWrapper,
  TransactionStatusWrapper,
} from "./transactionListItemstyles";

type TransactionDetailProps = {
  icon?: ReactNode;
  transactionTitle?: string;
  product?: string;
  date?: string;
  currency?: string;
  amount?: number;
  transactionStatus?: string;
  transactionType?: string;
  imgUrl?: string;
  onTitleClick?: MouseEventHandler<HTMLDivElement>;
};
const TransactionDetailContainer = ({
  icon,
  transactionTitle,
  transactionType,
  product,
  date,
  amount,
  currency,
  transactionStatus,
  imgUrl,
  onTitleClick,
}: TransactionDetailProps) => {
  return (
    <TransactionDetailWrapper type={transactionType} status={transactionStatus}>
      <div className="icon-cont">
        {imgUrl ? <img src={imgUrl} alt="" /> : icon}
      </div>
      <div className="detail-cont">
        <div className="transaction-type-cont" onClick={onTitleClick}>
          <h3>{transactionTitle}</h3>
          <span className="product">{product}</span>
          <span className="date-mobile">{date}</span>
        </div>
        <div className="date-cont">
          <span>{date}</span>
        </div>
        <div className="amount-cont">
          <span className="amount">
            {transactionType === "credit"
              ? "+"
              : transactionType === "debit"
              ? "-"
              : ""}{" "}
            {currency}
            {amount?.toLocaleString()}
          </span>
          <span className="status-mobile">{transactionStatus}</span>
        </div>

        <div className="option-icon-cont">
          <TransactionStatusWrapper status={transactionStatus}>
            <span>{transactionStatus}</span>
          </TransactionStatusWrapper>
          {/* <VerticalOptionIcon /> */}
        </div>
      </div>
    </TransactionDetailWrapper>
  );
};

export default TransactionDetailContainer;
