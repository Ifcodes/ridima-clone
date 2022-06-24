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
  onTitleClick,
}: TransactionDetailProps) => {
  return (
    <TransactionDetailWrapper type={transactionType}>
      <div className="icon-cont">{icon}</div>
      <div className="detail-cont">
        <div className="transaction-type-cont" onClick={onTitleClick}>
          <h3>{transactionTitle}</h3>
          <span>{product}</span>
        </div>
        <div className="date-cont">
          <span>{date}</span>
        </div>
        <div className="amount-cont">
          <span>
            {transactionType === "credit"
              ? "+"
              : transactionType === "debit"
              ? "-"
              : ""}{" "}
            {currency}
            {amount}
          </span>
        </div>

        <div className="option-icon-cont">
          <TransactionStatusWrapper status={transactionStatus}>
            <span>{transactionStatus}</span>
          </TransactionStatusWrapper>
          <VerticalOptionIcon />
        </div>
      </div>
    </TransactionDetailWrapper>
  );
};

export default TransactionDetailContainer;
