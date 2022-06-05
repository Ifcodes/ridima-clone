import React, { ReactNode } from "react";
import { TradeSummaryWrapper } from "./styledTradeSummary";

type TradeSummaryProps = {
  transactionDate?: string;
  cardAmount?: string;
  rate?: number;
  expectedValue?: number;
  cardIcon?: ReactNode;
  cardName?: string;
  cardDescription?: string;
};
const TradeSummaryCard = ({
  transactionDate,
  cardAmount,
  rate,
  expectedValue,
  cardIcon,
  cardName,
  cardDescription,
}: TradeSummaryProps) => {
  const summaryKeys = [
    {
      title: "Transaction Date:",
      value: transactionDate,
    },
    {
      title: "Card Amount:",
      value: cardAmount,
    },
    {
      title: "Rate:",
      value: rate,
    },
    {
      title: "You would get:",
      value: expectedValue,
    },
  ];

  return (
    <TradeSummaryWrapper>
      <div className="card-heading">
        <div>{cardIcon}</div>
        <div className="card-title-cont">
          <h2>{cardName}</h2>
          <span>{cardDescription}</span>
        </div>
      </div>
      <div className="details-cont">
        {summaryKeys.map((key) => (
          <div key={key.title} className="detail">
            <span>{key.title}</span>
            <span>{key.value}</span>
          </div>
        ))}
      </div>
    </TradeSummaryWrapper>
  );
};

export default TradeSummaryCard;
